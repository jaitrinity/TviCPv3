import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForthSectorAdditionComponent } from './forth-sector-addition.component';

describe('ForthSectorAdditionComponent', () => {
  let component: ForthSectorAdditionComponent;
  let fixture: ComponentFixture<ForthSectorAdditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForthSectorAdditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForthSectorAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
