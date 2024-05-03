import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McbComponent } from './mcb.component';

describe('McbComponent', () => {
  let component: McbComponent;
  let fixture: ComponentFixture<McbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
