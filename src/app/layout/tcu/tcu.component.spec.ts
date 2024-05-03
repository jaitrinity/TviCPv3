import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TcuComponent } from './tcu.component';

describe('TcuComponent', () => {
  let component: TcuComponent;
  let fixture: ComponentFixture<TcuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TcuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TcuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
