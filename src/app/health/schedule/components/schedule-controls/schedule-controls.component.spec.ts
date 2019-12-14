import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleControlsComponent } from './schedule-controls.component';

describe('ScheduleControlsComponent', () => {
  let component: ScheduleControlsComponent;
  let fixture: ComponentFixture<ScheduleControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
