import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RruAddComponent } from './rru-add.component';

describe('RruAddComponent', () => {
  let component: RruAddComponent;
  let fixture: ComponentFixture<RruAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RruAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RruAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
