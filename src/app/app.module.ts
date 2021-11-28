import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { KentekenPipe } from '../pipes/kenteken.pipe';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { QuestionService } from '../services/question.service';
import { QuestionControlService } from '../services/question-control.service';
import { DynamicFormQuestionComponent } from '././dynamic-form/dynamic-form-question.component';
import { VoertuigFormComponent } from './voertuig-form/voertuig-form.component';

@NgModule({
  declarations: [
    AppComponent,
    KentekenPipe,
    DynamicFormComponent,
    DynamicFormQuestionComponent,
    VoertuigFormComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, StoreModule.forRoot({}, {})],
  providers: [QuestionService, QuestionControlService],
  bootstrap: [AppComponent],
})
export class AppModule {}
