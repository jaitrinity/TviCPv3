import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbsStatusComponent } from './nbs-status.component';

describe('NbsStatusComponent', () => {
  let component: NbsStatusComponent;
  let fixture: ComponentFixture<NbsStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbsStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbsStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
