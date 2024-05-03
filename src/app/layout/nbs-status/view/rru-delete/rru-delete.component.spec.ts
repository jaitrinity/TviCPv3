import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RruDeleteComponent } from './rru-delete.component';

describe('RruDeleteComponent', () => {
  let component: RruDeleteComponent;
  let fixture: ComponentFixture<RruDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RruDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RruDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
