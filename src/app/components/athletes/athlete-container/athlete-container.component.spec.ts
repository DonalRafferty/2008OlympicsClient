/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { AthleteContainerComponent } from './athlete-container.component';
import {Athlete} from '../../../classes/athlete';
import {SingleMedalCountComponent} from '../../medals/single-medal-count/single-medal-count.component';
import {TripleMedalCountComponent} from '../../medals/triple-medal-count/triple-medal-count.component';
import {AthleteEventsComponent} from '../athlete-events/athlete-events.component';
import {AthleteDetailsComponent} from '../athlete-details/athlete-details.component';

@Component({
  template: `<app-athlete-container [athlete]="athlete"></app-athlete-container>`
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

describe('AthleteContainerComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AthleteContainerComponent,
        AthleteDetailsComponent,
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
  });

  it('should create athlete container', () => {
    expect(component).toBeTruthy();
  });
});
