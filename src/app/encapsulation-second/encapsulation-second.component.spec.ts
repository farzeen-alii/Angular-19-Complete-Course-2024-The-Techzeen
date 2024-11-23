import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncapsulationSecondComponent } from './encapsulation-second.component';

describe('EncapsulationSecondComponent', () => {
  let component: EncapsulationSecondComponent;
  let fixture: ComponentFixture<EncapsulationSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncapsulationSecondComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncapsulationSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
