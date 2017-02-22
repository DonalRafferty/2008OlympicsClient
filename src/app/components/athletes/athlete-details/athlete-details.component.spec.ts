/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { AthleteDetailsComponent } from './athlete-details.component';
import {AthleteEventsComponent} from '../athlete-events/athlete-events.component';
import {SingleMedalCountComponent} from '../../medals/single-medal-count/single-medal-count.component';
import {TripleMedalCountComponent} from '../../medals/triple-medal-count/triple-medal-count.component';
import {Athlete} from '../../../classes/athlete';

@Component({
  template: `<app-athlete-details [athlete]="athlete"></app-athlete-details>`
})

class TestHostComponent {
  athlete: Athlete = {
    name: 'Test Name',
    sex: 'Test Sex',
    country: 'Test Country',
    events: [
      {
        name : 'Test event',
        medal: 'Test Medal'
      }
    ],
    medals: {
      gold: 1,
      silver: 5,
      bronze: 0
    }
  }
}

describe('AthleteDetailsComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let newComponent: AthleteDetailsComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AthleteDetailsComponent,
                      AthleteEventsComponent,
                      TripleMedalCountComponent,
                      SingleMedalCountComponent,
                      TestHostComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    newComponent = new AthleteDetailsComponent();
  });

  it('should create athlete details component', () => {
    expect(component).toBeTruthy();
  });
  it('should create a random color', () => {
    expect(newComponent.getRandomColor()).toContain('#');
    expect(newComponent.getRandomColor().length).toEqual(7);
  });
});
