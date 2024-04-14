import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultatsPlatsComponent } from './resultats-plats.component';

describe('ResultatsPlatsComponent', () => {
  let component: ResultatsPlatsComponent;
  let fixture: ComponentFixture<ResultatsPlatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultatsPlatsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResultatsPlatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
