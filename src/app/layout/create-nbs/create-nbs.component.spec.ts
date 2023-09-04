import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNbsComponent } from './create-nbs.component';

describe('CreateNbsComponent', () => {
  let component: CreateNbsComponent;
  let fixture: ComponentFixture<CreateNbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
