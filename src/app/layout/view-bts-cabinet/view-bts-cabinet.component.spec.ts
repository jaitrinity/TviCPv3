import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBtsCabinetComponent } from './view-bts-cabinet.component';

describe('ViewBtsCabinetComponent', () => {
  let component: ViewBtsCabinetComponent;
  let fixture: ComponentFixture<ViewBtsCabinetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBtsCabinetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBtsCabinetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
