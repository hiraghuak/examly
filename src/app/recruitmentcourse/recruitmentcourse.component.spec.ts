import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitmentcourseComponent } from './recruitmentcourse.component';

describe('RecruitmentcourseComponent', () => {
  let component: RecruitmentcourseComponent;
  let fixture: ComponentFixture<RecruitmentcourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruitmentcourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruitmentcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
