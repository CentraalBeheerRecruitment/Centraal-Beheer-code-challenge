import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { autoType } from 'src/models/autoType';
import { voertuigType } from 'src/models/voertuigType';
import { KentekenCheck } from 'rdw-kenteken-check';
import { motorType } from 'src/models/motorType';
import { Observable } from 'rxjs';
import { QuestionBase } from 'src/models/question-base';
import { QuestionService } from 'src/services/question.service';

@Component({
  selector: 'voertuig-form',
  templateUrl: './voertuig-form.component.html',
})
export class VoertuigFormComponent {
  public voertuigForm: FormGroup;
  public autoType = autoType;
  public voertuigType = voertuigType;
  public motorType = motorType;
  questions$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();

    this.voertuigForm = new FormGroup({
      soortVoertuig: new FormControl(voertuigType.Auto, [Validators.required]),
      typeVoertuig: new FormControl(''),
      kenteken: new FormControl('', [
        Validators.required,
        Validators.maxLength(8),
      ]),
    });
  }

  onSubmit(): void {
    console.log('onSubmit(): ', this.voertuigForm.value);
  }

  kentekenIsValid(): boolean {
    var kenteken = this.voertuigForm.get('kenteken')?.value as string;
    if (kenteken.length < 6) {
      return true;
    }
    const kentekencheck = new KentekenCheck(kenteken);
    kentekencheck.formatLicense();

    return kentekencheck.valid;
  }
}
