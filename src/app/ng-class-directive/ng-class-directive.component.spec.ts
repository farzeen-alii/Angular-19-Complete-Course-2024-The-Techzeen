import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgClassDirectiveComponent } from './ng-class-directive.component';

describe('NgClassDirectiveComponent', () => {
  let component: NgClassDirectiveComponent;
  let fixture: ComponentFixture<NgClassDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgClassDirectiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgClassDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
