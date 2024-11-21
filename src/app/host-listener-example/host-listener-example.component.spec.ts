import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostListenerExampleComponent } from './host-listener-example.component';

describe('HostListenerExampleComponent', () => {
  let component: HostListenerExampleComponent;
  let fixture: ComponentFixture<HostListenerExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostListenerExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostListenerExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
