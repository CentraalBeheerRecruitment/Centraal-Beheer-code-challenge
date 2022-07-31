import {AbstractControl, FormControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function customRequiredValidator(vehicle: FormControl): ValidatorFn {
  return (control:AbstractControl) : ValidationErrors | null => {

    if (control.value === 'geen-type') {
      return null
    } else if (!control.value && !vehicle.value) {
      return null
    } else if (control.value === 'kies-type') {
      control.markAsUntouched();
      return {required: true}
    } else {
      return null
    }
  }
}
