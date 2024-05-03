import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFibreNodeComponent } from './view-fibre-node.component';

describe('ViewFibreNodeComponent', () => {
  let component: ViewFibreNodeComponent;
  let fixture: ComponentFixture<ViewFibreNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFibreNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFibreNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
