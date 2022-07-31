import { Injectable } from '@angular/core';
import {Vehicle} from "../models/vehicleModels";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
// Met deze service kan ik alle voertuigen beheren en mogelijke functies op uitvoeren.
export class VehiclesFormService {
  private _vehiclesList: Vehicle[] = [
    {
      label: 'Auto',
      subtypes: [
        {
          label: 'Hatchback'
        },
        {
          label: 'Sedan'
        },
        {
          label: 'Station'
        },
        {
          label: 'Cabriolet'
        },
        {
          label: 'Coupé'
        },
        {
          label: 'Multi Purpose Vehicle (MVP)'
        },
        {
          label: 'Terreinauto'
        }
      ]
    },
    {
      label: 'Motor',
      subtypes: [
        {
          label: 'All-road'
        },
        {
          label: 'Naked'
        },
        {
          label: 'Enduro'
        },
        {
          label: 'Race'
        },
        {
          label: 'Chopper'
        },
        {
          label: 'Zijspan'
        }
      ]
    },
    {
      label: 'Scooter',
      subtypes: []
    }
  ];
  private _activeVehicle = 'None';

  private _formErrors: number = 0; // FormErrorcounter begint 0, en als er 'ergens' en error zit dan geeft hij het aan.
  private _vehicleFormSubject$ = new Subject(); // This will be used to create our Observable
  public vehicleFormOb$ = this._vehicleFormSubject$.asObservable(); // This is our Observable


  public getVehicles() {
    return this._vehiclesList;
  }

  public setActiveVehicle(vehicle: string) {
    this._activeVehicle = vehicle;
  }

  public getActiveVehicle() {
    return this._activeVehicle;
  }

  // Hiermee wordt er een formErrorcounter gezet
  public setFormError() {
    this._formErrors ++;
  }

  // Deze functie zorgt ervoor dat de
  public validateForm() {
    this._formErrors = 0;
    this._vehicleFormSubject$.next()

    if (this._formErrors === 0) {
      return 'valid';
    } else {
      return 'invalid';
    }
  }
}
