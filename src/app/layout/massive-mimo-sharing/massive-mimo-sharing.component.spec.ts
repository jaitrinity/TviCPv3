import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MassiveMimoSharingComponent } from './massive-mimo-sharing.component';

describe('MassiveMimoSharingComponent', () => {
  let component: MassiveMimoSharingComponent;
  let fixture: ComponentFixture<MassiveMimoSharingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MassiveMimoSharingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MassiveMimoSharingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
