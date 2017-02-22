/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { AthleteEventsComponent } from './athlete-events.component';
import {AthleteEvent} from '../../../classes/athlete';

@Component({
  template: `<app-athlete-events [events]="events"></app-athlete-events>`
})
class TestHostComponent {
  events: AthleteEvent[] = [{
    name: '100m',
    medal: 'Gold'
  }, {
    name: '1000m',
    medal: 'Silver'
  }];
}

describe('AthleteEventsComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let countEl;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AthleteEventsComponent, TestHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    countEl = fixture.debugElement.queryAll(By.css('.event'));
    fixture.detectChanges();
  });

  it('should create athlete events', () => {
    expect(component).toBeTruthy();
  });
  // TODO: Tests follow same pattern as in Medal Components
});
