import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchCaseDirectiveComponent } from './switch-case-directive.component';

describe('SwitchCaseDirectiveComponent', () => {
  let component: SwitchCaseDirectiveComponent;
  let fixture: ComponentFixture<SwitchCaseDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchCaseDirectiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchCaseDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
