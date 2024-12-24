import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectableServiceComponent } from './injectable-service.component';

describe('InjectableServiceComponent', () => {
  let component: InjectableServiceComponent;
  let fixture: ComponentFixture<InjectableServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InjectableServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InjectableServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
