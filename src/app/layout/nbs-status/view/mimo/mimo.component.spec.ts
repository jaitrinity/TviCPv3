import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MimoComponent } from './mimo.component';

describe('MimoComponent', () => {
  let component: MimoComponent;
  let fixture: ComponentFixture<MimoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MimoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
