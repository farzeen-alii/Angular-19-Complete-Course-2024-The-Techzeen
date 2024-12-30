import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostApiServiceComponent } from './post-api-service.component';

describe('PostApiServiceComponent', () => {
  let component: PostApiServiceComponent;
  let fixture: ComponentFixture<PostApiServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostApiServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostApiServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
