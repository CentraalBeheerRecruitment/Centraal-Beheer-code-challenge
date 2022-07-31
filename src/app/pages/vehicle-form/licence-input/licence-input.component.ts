import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-licence-input',
  templateUrl: './licence-input.component.html',
  styleUrls: ['./licence-input.component.css']
})
export class LicenceInputComponent implements OnInit {
  licensePlate = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

}
