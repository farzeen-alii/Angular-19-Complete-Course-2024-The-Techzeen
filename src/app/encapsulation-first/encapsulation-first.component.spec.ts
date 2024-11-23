import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncapsulationFirstComponent } from './encapsulation-first.component';

describe('EncapsulationFirstComponent', () => {
  let component: EncapsulationFirstComponent;
  let fixture: ComponentFixture<EncapsulationFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncapsulationFirstComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncapsulationFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
