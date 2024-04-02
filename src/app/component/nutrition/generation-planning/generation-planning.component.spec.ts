import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerationPlanningComponent } from './generation-planning.component';

describe('GenerationPlanningComponent', () => {
  let component: GenerationPlanningComponent;
  let fixture: ComponentFixture<GenerationPlanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GenerationPlanningComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenerationPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
