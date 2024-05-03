import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IWanComponent } from './i-wan.component';

describe('IWanComponent', () => {
  let component: IWanComponent;
  let fixture: ComponentFixture<IWanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IWanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IWanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
