import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { KentekenCheck } from 'rdw-kenteken-check';
import { QuestionBase } from '../models/question-base';

@Injectable()
export class QuestionControlService {
  constructor() {}

  toFormGroup(questions: QuestionBase<string>[]) {
    const group: any = {};

    questions.forEach((question) => {
      if (question.required) {
        group[question.key] = new FormControl(
          question.value || '',
          Validators.required
        );
      }
      if (question.validateKenteken) {
        group[question.key] = new FormControl(
          question.value || '',
          this.kentekenIsValid()
        );
      }
      group[question.key] = new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }

  kentekenIsValid(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      var kenteken = control.value as string;
      if (kenteken.length < 6) {
        return null;
      }
      const kentekencheck = new KentekenCheck(kenteken);
      kentekencheck.formatLicense();

      return kentekencheck.valid
        ? null
        : { kentekenInvalid: { value: control.value } };
    };
  }
}
