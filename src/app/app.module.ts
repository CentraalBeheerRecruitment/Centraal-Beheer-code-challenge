// Angular Base
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';

// Functionality
import { ReactiveFormsModule } from '@angular/forms';

// Components and Pages
import { VehicleFormComponent } from './pages/vehicle-form/vehicle-form.component';
import { VehicleSelectionInputComponent } from './pages/vehicle-form/vehicle-selection-input/vehicle-selection-input.component';
import { LicenceInputComponent } from './pages/vehicle-form/licence-input/licence-input.component';

@NgModule({
  declarations: [
    AppComponent,
    VehicleFormComponent,
    VehicleSelectionInputComponent,
    LicenceInputComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}, {}),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
