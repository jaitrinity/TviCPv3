import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTenencyComponent } from './new-tenency.component';

describe('NewTenencyComponent', () => {
  let component: NewTenencyComponent;
  let fixture: ComponentFixture<NewTenencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTenencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTenencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
