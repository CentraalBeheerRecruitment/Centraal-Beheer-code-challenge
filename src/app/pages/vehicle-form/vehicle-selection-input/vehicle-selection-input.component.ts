import {Component, ElementRef, ViewChild, OnInit, SimpleChanges, OnChanges} from '@angular/core';
import {AbstractControl, FormControl, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {VehiclesService} from "../../../services/vehicles.service";
import {Subtype, Vehicle} from "../../../models/vehicleModels";

@Component({
  selector: 'app-vehicle-selection-input',
  templateUrl: './vehicle-selection-input.component.html',
  styleUrls: ['./vehicle-selection-input.component.css']
})
export class VehicleSelectionInputComponent implements OnInit  {
  vehicleList: Vehicle[] = this.VehiclesService.getVehicles();
  subtypesList: Subtype[] = [];

  // Met reactive forms kan ik met validatoren werken en reactieve data binding. Was ik wel nieuw mee, is pas dit jaar
  // uitgekomen. Maar ik vond het wel een verbetering.
  selectedVehicle = new FormControl('', [
    Validators.required
  ]);

  selectedSubtype = new FormControl('', [
    // Een eigen custom validator die dit veld required maakt als er een voertuig geselecteerd is die subtypes heeft
    // Als het voertuig géén subtypes heeft dan wordt het null
    this.customRequiredValidator(this.selectedVehicle)
  ]);

  @ViewChild('subtypeInput') subtypeInput!: ElementRef;

  constructor(
    private VehiclesService: VehiclesService
  ) {}

  ngOnInit(): void {
    // Blijkbaar heeft de reactive form inputs een observer waar je aan kan subscriben om te reageren op data change.
    // Hier zorg ik er dan voor dat de HTML geupdate wordt op basis van de geselecteerde voertuig.
    // Op deze manier is het ook flexibel, dus niet álleen scooters.
    this.selectedVehicle.valueChanges.subscribe(value => {
      this.subtypesList = this.vehicleList.find(vehicle => vehicle.label === this.selectedVehicle.value)!.subtypes;

      if (this.subtypesList.length > 0) {
        this.subtypeInput.nativeElement.disabled = false;
        this.selectedSubtype.setValue('kies-type');
      } else {
        this.subtypeInput.nativeElement.disabled = true;
        this.selectedSubtype.setValue('geen-type');
      }

      this.VehiclesService.setActiveVehicle(value);
    })
  }

  // Ik kon niet uitvinden hoe ik de HTML kon aanpasen op basis of de input valid was of niet. Op een manier dat er niet
  // direct al een error te zien was. Dus ik heb het met dit soort functies opgelost waarmee er eerst gechecked wordt
  // of het veld aangeraakt is.
  validateSelectedVehicle() {
    return !this.selectedVehicle.touched || (this.selectedVehicle.touched && !this.selectedVehicle.hasError('required'));
  }

  validateSelectedSubtype() {
    return !this.selectedSubtype.touched || (this.selectedSubtype.touched && !this.selectedSubtype.hasError('required'));
  }

  // De custom validator factory. Dit had in een eigen bestand gekund, maar vond het ook wel prettig om alles bij elkaar te hebben.
  // Zouden er meer komen dan had ik ze wel in een los bestand gezet.
  customRequiredValidator(vehicle: FormControl): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {

      if (control.value === 'geen-type') {
        return null
      } else if (!control.value && !vehicle.value) {
        return null
      } else if (control.value === 'kies-type') {
        return {required: true}
      } else {
        return null
      }
    }
  }
  // Dit maakt de subtype veld direct disabled. Als ik het in de HTML deed kwam er namelijk een runtime error.
  ngAfterViewInit(): void {
    this.subtypeInput.nativeElement.disabled = true;
  }
}
