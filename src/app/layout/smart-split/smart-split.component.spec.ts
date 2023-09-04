import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartSplitComponent } from './smart-split.component';

describe('SmartSplitComponent', () => {
  let component: SmartSplitComponent;
  let fixture: ComponentFixture<SmartSplitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartSplitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartSplitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
