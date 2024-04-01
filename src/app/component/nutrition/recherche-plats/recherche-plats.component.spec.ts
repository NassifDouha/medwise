import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecherchePlatsComponent } from './recherche-plats.component';

describe('RecherchePlatsComponent', () => {
  let component: RecherchePlatsComponent;
  let fixture: ComponentFixture<RecherchePlatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecherchePlatsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecherchePlatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
