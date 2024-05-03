import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CowSharingComponent } from './cow-sharing.component';

describe('CowSharingComponent', () => {
  let component: CowSharingComponent;
  let fixture: ComponentFixture<CowSharingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CowSharingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CowSharingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
