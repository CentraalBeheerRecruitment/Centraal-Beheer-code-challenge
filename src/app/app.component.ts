import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  name = 'Angular';
  images = ["./assets/auto.jpg", "./assets/motor.jpg", "./assets/scooter.jpg"]
  ngOnInit(): void { }

  selectedImageURL: string = '';
  selectedVehicles: string[] = [];
  selectChangeHandler(event: any) {
    console.log(event.target.value);
    if (event.target.value === "auto") {
      this.selectedVehicles = ["Hatchback", "Sedan", "Station", "Cabriolet", "Coupé", "MPV", "Terreinauto"]
      this.selectedImageURL = this.images[0];
      return this.selectedImageURL
    } else if (event.target.value === "motor") {
      this.selectedVehicles = ["All-road", "Naked", "Enduro", "Race", "Toermotor", "Chopper", "Zijspan"];
      this.selectedImageURL = this.images[1];
      return this.selectedImageURL
    }
    else {
      this.selectedVehicles = [];
      this.selectedImageURL = this.images[2];
      return this.images[2]
    }


  }


}

