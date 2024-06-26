import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesViewComponent } from './courses-view.component';

describe('CoursesViewComponent', () => {
  let component: CoursesViewComponent;
  let fixture: ComponentFixture<CoursesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoursesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
