import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTmaTmbComponent } from './view-tma-tmb.component';

describe('ViewTmaTmbComponent', () => {
  let component: ViewTmaTmbComponent;
  let fixture: ComponentFixture<ViewTmaTmbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTmaTmbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTmaTmbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
