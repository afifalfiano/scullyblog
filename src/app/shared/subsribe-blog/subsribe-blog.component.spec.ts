import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsribeBlogComponent } from './subsribe-blog.component';

describe('SubsribeBlogComponent', () => {
  let component: SubsribeBlogComponent;
  let fixture: ComponentFixture<SubsribeBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubsribeBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubsribeBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
