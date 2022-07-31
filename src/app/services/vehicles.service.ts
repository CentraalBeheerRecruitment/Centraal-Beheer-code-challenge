import { Injectable } from '@angular/core';
import {Vehicle} from "../models/vehicleModels";

@Injectable({
  providedIn: 'root'
})
// Met deze service kan ik alle voertuigen beheren en mogelijke functies op uitvoeren.
export class VehiclesService {
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

  public getVehicles() {
    return this._vehiclesList;
  }

  public setActiveVehicle(vehicle: string) {
    this._activeVehicle = vehicle;
  }

  public getActiveVehicle() {
    return this._activeVehicle;
  }
}
