import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultatPlanningComponent } from './resultat-planning.component';

describe('ResultatPlanningComponent', () => {
  let component: ResultatPlanningComponent;
  let fixture: ComponentFixture<ResultatPlanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultatPlanningComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResultatPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
