import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreserveWhitespaceExampleComponent } from './preserve-whitespace-example.component';

describe('PreserveWhitespaceExampleComponent', () => {
  let component: PreserveWhitespaceExampleComponent;
  let fixture: ComponentFixture<PreserveWhitespaceExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreserveWhitespaceExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreserveWhitespaceExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
