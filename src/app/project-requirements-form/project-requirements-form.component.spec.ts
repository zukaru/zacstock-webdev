import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectRequirementsFormComponent } from './project-requirements-form.component';

describe('ProjectRequirementsFormComponent', () => {
  let component: ProjectRequirementsFormComponent;
  let fixture: ComponentFixture<ProjectRequirementsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectRequirementsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectRequirementsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
