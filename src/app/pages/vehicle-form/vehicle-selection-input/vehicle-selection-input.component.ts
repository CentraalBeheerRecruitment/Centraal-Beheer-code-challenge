import {Component, ElementRef, ViewChild, OnInit, SimpleChanges, OnChanges} from '@angular/core';
import { FormControl } from '@angular/forms';
import {VehiclesService} from "../../../services/vehicles.service";
import {Subtype, Vehicle} from "../../../models/vehicleModels";

@Component({
  selector: 'app-vehicle-selection-input',
  templateUrl: './vehicle-selection-input.component.html',
  styleUrls: ['./vehicle-selection-input.component.css']
})
export class VehicleSelectionInputComponent implements OnInit  {
  vehicleList: Vehicle[] = this.vehiclesService.getVehicles();
  subtypesList: Subtype[] = [];

  selectedVehicle = new FormControl('');
  selectedSubtype = new FormControl('');

  @ViewChild('subtypeInput') subtypeInput!: ElementRef;

  constructor(
    private vehiclesService: VehiclesService
  ) {}

  ngOnInit(): void {
    this.selectedVehicle.valueChanges.subscribe(value => {
      this.subtypesList = this.vehicleList.find(vehicle => vehicle.label === this.selectedVehicle.value)!.subtypes;

      if (this.subtypesList.length > 0) {
        this.subtypeInput.nativeElement.disabled = false;
        this.selectedSubtype.setValue('kies-type');
      } else {
        this.subtypeInput.nativeElement.disabled = true;
        this.selectedSubtype.setValue('geen-types');
      }

    })
  }

  ngAfterViewInit(): void {
    this.subtypeInput.nativeElement.disabled = true;
  }
}
