import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteApiServiceComponent } from './delete-api-service.component';

describe('DeleteApiServiceComponent', () => {
  let component: DeleteApiServiceComponent;
  let fixture: ComponentFixture<DeleteApiServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteApiServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteApiServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
