import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbsSharingComponent } from './nbs-sharing.component';

describe('NbsSharingComponent', () => {
  let component: NbsSharingComponent;
  let fixture: ComponentFixture<NbsSharingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbsSharingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbsSharingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
