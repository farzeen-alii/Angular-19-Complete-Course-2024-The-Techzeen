import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperComponent } from './super.component';

describe('SuperComponent', () => {
  let component: SuperComponent;
  let fixture: ComponentFixture<SuperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
