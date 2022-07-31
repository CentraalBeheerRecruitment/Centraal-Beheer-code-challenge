import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {KentekenCheck} from 'rdw-kenteken-check'
import {VehiclesFormService} from "../../../services/vehicles-form.service";

@Component({
  selector: 'app-licence-input',
  templateUrl: './licence-input.component.html',
  styleUrls: ['./licence-input.component.css']
})
export class LicenceInputComponent implements OnInit {
  licensePlate = new FormControl('', );
  validLicense: string = 'validating'; // Dit kan validating, invalid of valid worden.

  constructor(
    public VehiclesService: VehiclesFormService
  ) {}

  ngOnInit(): void {
    // Een custom observer die reageert op een form submission.
    // Form wordt getouched voor mogelijke errors en daarna gecontroleerd. Als response wordt er een error gestuurd
    // naar de server, mits dat er is.
    this.VehiclesService.vehicleFormOb$.subscribe(() => {
      this.licensePlate.markAsTouched();
      this.validateLicensePlate();
      if (this.validLicense === 'invalid' ) {
        this.VehiclesService.setFormError()
      }
    });
  }

  // Deze functie update het kenteken dynamisch op basis van inputs. Ik heb online verschillende functies gezien die het
  // heel programmatic oplossen. Maar ik vond dat die methodieken érg onoverzichtelijk waren. Daarbij heb ik het vermoeden
  // dat als er een nieuw soort kenteken-patronen uitkomt, de refactortijd groots is. Want per jaar zou er mogelijk nieuwe
  // patronen kunnen komen.
  //
  // Met deze stuk code, al is het een reeks aan hardcoded ifs en else ifs, maakt het zeer overzichtelijk om te zien
  // wat er gebeurt. Dit is ook makkelijk uit te breiden als er nieuwe kenteken patronen bij komen.
  // (Tenzij alle algoritmes ineens veranderen)
  //
  // Dit stukje code zou de formatting van iedere huidige kenteken formatie moeten verzorgen
  // volgens https://www.rdw.nl/particulier/voertuigen/auto/de-kentekenplaat/cijfers-en-letters-op-de-kentekenplaat => tekencombinatie per jaar

  updateLicense(rawLicense: string) {
    const license = rawLicense.replaceAll('-', '').toUpperCase();

    const oneOne = (/^[0-9][A-Z]/g.test(license) || /^[A-Z][0-9]/g.test(license)); // Licenses starting with 9-X or X-9
    const oneTwo = (/^[0-9][A-Z][A-Z][0-9]/g.test(license) || /^[A-Z][0-9][0-9][A-Z]/g.test(license)); // Licenses starting with 9-XX or X-99
    const oneTwoThree = (/^[0-9][A-Z][A-Z][0-9][0-9]/g.test(license) || /^[A-Z][0-9][0-9][A-Z][A-Z]/g.test(license)); // Licenses starting with 9-XX-99
    const oneThree = (/^[A-Z][0-9][0-9][0-9]/g.test(license) || /^[0-9][A-Z][A-Z][A-Z]/g.test(license)); // Licenses starting with 9-XXX or X-999
    const trippleStart = (/^[0-9][0-9][0-9]/g.test(license) || /^[A-Z][A-Z][A-Z]/g.test(license)) // Licenses starting with XXX or 999
    const threeOne = (/^[0-9][0-9][0-9][A-Z]/g.test(license) || /^[A-Z][A-Z][A-Z][0-9]/g.test(license)) // Licenses starting with XXX-9 or 999-X
    const twoThree = (/^[0-9][0-9][A-Z][A-Z][A-Z]/g.test(license) || /^[A-Z][A-Z][0-9][0-9][0-9]/g.test(license)) // Licenses starting with 99-XXX

    if (license.length === 2 && oneOne) {

      let tempLicense = license.substring(0, 1) + '-' + license.substring(1, 2);
      this.licensePlate.setValue(tempLicense);

    } else if (license.length === 3 && oneTwo) {

      let tempLicense = license.substring(0, 1) + '-' + license.substring(1, 3);
      this.licensePlate.setValue(tempLicense);

    } else if (license.length === 3 && trippleStart) {

      this.licensePlate.setValue(license + '-');

    } else if (license.length === 4 && threeOne) {

      let tempLicense = license.substring(0, 3) + '-' + license.substring(3, 5);
      this.licensePlate.setValue(tempLicense);

    } else if (license.length === 4 && oneThree) {

      let tempLicense = license.substring(0, 1) + '-' + license.substring(1, 4);
      this.licensePlate.setValue(tempLicense);

    } else if (license.length === 4 && oneTwo) {

      let tempLicense = license.substring(0, 1) + '-' + license.substring(1, 3) + '-' + license.substring(3, 5);
      this.licensePlate.setValue(tempLicense);

    } else if (license.length === 5 && oneTwoThree) {

      let tempLicense = license.substring(0, 1) + '-' + license.substring(1, 3) + '-' + license.substring(3, 5);
      this.licensePlate.setValue(tempLicense);

    } else if (license.length === 5 && oneThree) {

      let tempLicense = license.substring(0, 1) + '-' + license.substring(1, 4) + '-' + license.substring(4, 5);
      this.licensePlate.setValue(tempLicense);

    } else if (license.length === 5 && twoThree) {

      let tempLicense = license.substring(0, 2) + '-' + license.substring(2, 5);
      this.licensePlate.setValue(tempLicense);

    } else if (license.length === 5 && threeOne) {

      let tempLicense = license.substring(0, 3) + '-' + license.substring(3, 6);
      this.licensePlate.setValue(tempLicense);

    } else {
      // Ik had dit blok tweemaal nodig, dus heb ik er een arrowfunction van gemaakt. Deze breekt de string op in losse
      // stukjes en zet per tweede character een streepje.
      const formatLicenseSimple = (license: string) => {
        let brokenLicense = license.split("");
        let i = 0;
        let tempLicense = '';
        while (i < license.length) {
          if (i % 2 !== 0) {
            if (i === 5) {
              tempLicense = tempLicense + brokenLicense[i]
            } else {
              tempLicense = tempLicense + brokenLicense[i] + '-'
            }

          } else {
            tempLicense = tempLicense + brokenLicense[i]
          }
          i++
        }

        this.licensePlate.setValue(tempLicense);
      }
      if (license.length === 6) {
        const newLicense = new KentekenCheck(license);
        newLicense.formatLicense();

        if (newLicense.valid === true) {
          this.licensePlate.setValue(newLicense.newStr);
          this.validLicense = 'valid';
        } else {
          formatLicenseSimple(license);
          this.validLicense = 'invalid';
        }
      } else {
        // Licenses in XX-XX-XX format
        formatLicenseSimple(license);
      }
    }
  }

  // Deze functie vangt geplakte kentekens op
  pastedLicense(event: ClipboardEvent) {
    event.preventDefault();
    this.validLicense = 'validating';
    let clipboardData = event.clipboardData!.getData('text');
    this.updateLicense(clipboardData);
  }

  // Deze functie vangt getypte kenteksn op
  typedLicense(event: KeyboardEvent) {
    if ((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 65 && event.keyCode <= 90)) {
      let license = this.licensePlate.value;

      this.validLicense = 'validating';
      this.updateLicense(license);
    }
  }

  // Deze functie valideert de form vroegtijdig. De update functie doet het namelijk aan het eind
  validateLicensePlate() {
    if (this.licensePlate.value.length < 8) {
      this.validLicense = 'invalid';
    }
  }

  // Een functie speciaal voor het error bericht
  hideLicenseError() {
    return this.validLicense === 'valid' || this.validLicense === 'validating';
  }
}
