import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RruComponent } from './rru.component';

describe('RruComponent', () => {
  let component: RruComponent;
  let fixture: ComponentFixture<RruComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RruComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
