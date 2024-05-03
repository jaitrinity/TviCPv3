import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMcbComponent } from './view-mcb.component';

describe('ViewMcbComponent', () => {
  let component: ViewMcbComponent;
  let fixture: ComponentFixture<ViewMcbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMcbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMcbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
