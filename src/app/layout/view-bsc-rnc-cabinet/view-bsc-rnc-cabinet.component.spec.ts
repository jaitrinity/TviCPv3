import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBscRncCabinetComponent } from './view-bsc-rnc-cabinet.component';

describe('ViewBscRncCabinetComponent', () => {
  let component: ViewBscRncCabinetComponent;
  let fixture: ComponentFixture<ViewBscRncCabinetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBscRncCabinetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBscRncCabinetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
