import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TclRedwinComponent } from './tcl-redwin.component';

describe('TclRedwinComponent', () => {
  let component: TclRedwinComponent;
  let fixture: ComponentFixture<TclRedwinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TclRedwinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TclRedwinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
