import { Component, OnInit } from '@angular/core';
import {VehiclesService} from "../../services/vehicles.service";

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {

  constructor(
    // Deze zit erin zodat ik de afbeelding kan switchen
    public VehiclesService: VehiclesService
  ) {}

  ngOnInit(): void {
  }
}
