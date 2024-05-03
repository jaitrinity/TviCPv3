import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ip55Component } from './ip55.component';

describe('Ip55Component', () => {
  let component: Ip55Component;
  let fixture: ComponentFixture<Ip55Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ip55Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ip55Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
