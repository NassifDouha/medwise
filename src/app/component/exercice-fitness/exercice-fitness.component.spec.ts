import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from '../navbar/navbar.component';
import { ExerciceFitnessComponent } from './exercice-fitness.component';

describe('ExerciceFitnessComponent', () => {
  let component: ExerciceFitnessComponent;
  let fixture: ComponentFixture<ExerciceFitnessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExerciceFitnessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExerciceFitnessComponent);
  });
});

