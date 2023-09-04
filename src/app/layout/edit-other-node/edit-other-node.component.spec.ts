import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOtherNodeComponent } from './edit-other-node.component';

describe('EditOtherNodeComponent', () => {
  let component: EditOtherNodeComponent;
  let fixture: ComponentFixture<EditOtherNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditOtherNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOtherNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
