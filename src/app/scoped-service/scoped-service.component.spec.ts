import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScopedServiceComponent } from './scoped-service.component';

describe('ScopedServiceComponent', () => {
  let component: ScopedServiceComponent;
  let fixture: ComponentFixture<ScopedServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScopedServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScopedServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
