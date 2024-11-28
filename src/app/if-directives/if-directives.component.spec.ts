import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfDirectivesComponent } from './if-directives.component';

describe('IfDirectivesComponent', () => {
  let component: IfDirectivesComponent;
  let fixture: ComponentFixture<IfDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IfDirectivesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IfDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
