import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinkChartComponent } from './pink-chart.component';

describe('PinkChartComponent', () => {
  let component: PinkChartComponent;
  let fixture: ComponentFixture<PinkChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PinkChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PinkChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
