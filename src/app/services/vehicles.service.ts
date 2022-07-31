import { Injectable } from '@angular/core';
import {Vehicle} from "../models/vehicleModels";

@Injectable({
  providedIn: 'root'
})
// Met deze service kan ik alle voertuigen beheren en mogelijke functies op uitvoeren.
export class VehiclesService {
  private vehiclesList: Vehicle[] = [
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

  public getVehicles() {
    return this.vehiclesList;
  }
  public getVehicleNames() {
    return Object.keys(this.vehiclesList);
  }
}
