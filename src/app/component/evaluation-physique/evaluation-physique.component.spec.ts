import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationPhysiqueComponent } from './evaluation-physique.component';

describe('EvaluationPhysiqueComponent', () => {
  let component: EvaluationPhysiqueComponent;
  let fixture: ComponentFixture<EvaluationPhysiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EvaluationPhysiqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EvaluationPhysiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
