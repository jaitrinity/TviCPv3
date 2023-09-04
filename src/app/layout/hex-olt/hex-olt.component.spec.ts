import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HexOltComponent } from './hex-olt.component';

describe('HexOltComponent', () => {
  let component: HexOltComponent;
  let fixture: ComponentFixture<HexOltComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HexOltComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HexOltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
