import { ComponentFixture, TestBed } from '@angular/core/testing';

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
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
