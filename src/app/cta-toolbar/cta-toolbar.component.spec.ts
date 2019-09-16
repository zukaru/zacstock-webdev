import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaToolbarComponent } from './cta-toolbar.component';

describe('CtaToolbarComponent', () => {
  let component: CtaToolbarComponent;
  let fixture: ComponentFixture<CtaToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtaToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtaToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
