import { Component, OnInit } from '@angular/core';
import {VehiclesFormService} from "../../services/vehicles-form.service";

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {

  constructor(
    // Deze zit erin zodat ik de afbeelding kan switchen
    public VehiclesService: VehiclesFormService
  ) {}

  ngOnInit(): void {
  }

  submitForm() {
    // Deze functie roept de validatie functie op die aan de observer zit.
    if(this.VehiclesService.validateForm() === 'valid') {
      console.log('Data can be send!');
    } else {
      console.log('Data will nog be send');
    }
  }
}
