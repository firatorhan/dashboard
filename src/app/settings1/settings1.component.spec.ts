import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Settings1Component } from './settings1.component';

describe('Settings1Component', () => {
  let component: Settings1Component;
  let fixture: ComponentFixture<Settings1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Settings1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Settings1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
