import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorHandlingInterpolationComponent } from './error-handling-interpolation.component';

describe('ErrorHandlingInterpolationComponent', () => {
  let component: ErrorHandlingInterpolationComponent;
  let fixture: ComponentFixture<ErrorHandlingInterpolationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorHandlingInterpolationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorHandlingInterpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
