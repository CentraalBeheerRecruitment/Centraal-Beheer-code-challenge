import { TestBed } from '@angular/core/testing';
import { KentekenPipe } from 'src/pipes/kenteken.pipe';
import { QuestionService } from 'src/services/question.service';
import { VoertuigFormComponent } from './voertuig-form.component';

describe('VoertuigFormComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VoertuigFormComponent, KentekenPipe],
      providers: [
        { provide: QuestionService, useValue: jasmine.createSpyObj(['getQuestions']) }
      ]
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(VoertuigFormComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it(`should initialize the form`, () => {
    const fixture = TestBed.createComponent(VoertuigFormComponent);
    const component = fixture.componentInstance;
    expect(component.voertuigForm).not.toBeUndefined();
  });
});
