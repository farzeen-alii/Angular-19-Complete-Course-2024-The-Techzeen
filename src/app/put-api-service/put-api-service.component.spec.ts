import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutApiServiceComponent } from './put-api-service.component';

describe('PutApiServiceComponent', () => {
  let component: PutApiServiceComponent;
  let fixture: ComponentFixture<PutApiServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PutApiServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutApiServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
