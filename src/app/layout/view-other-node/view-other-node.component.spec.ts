import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOtherNodeComponent } from './view-other-node.component';

describe('ViewOtherNodeComponent', () => {
  let component: ViewOtherNodeComponent;
  let fixture: ComponentFixture<ViewOtherNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewOtherNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOtherNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
