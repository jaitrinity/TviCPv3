import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HpscComponent } from './hpsc.component';

describe('HpscComponent', () => {
  let component: HpscComponent;
  let fixture: ComponentFixture<HpscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HpscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HpscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
