import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetApiMethodComponent } from './get-api-method.component';

describe('GetApiMethodComponent', () => {
  let component: GetApiMethodComponent;
  let fixture: ComponentFixture<GetApiMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetApiMethodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetApiMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
