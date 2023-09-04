import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteUpgradeComponent } from './site-upgrade.component';

describe('SiteUpgradeComponent', () => {
  let component: SiteUpgradeComponent;
  let fixture: ComponentFixture<SiteUpgradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteUpgradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteUpgradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
