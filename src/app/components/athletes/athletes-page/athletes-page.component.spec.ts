/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { AthletesPageComponent } from './athletes-page.component';
import {AthleteContainerComponent} from '../athlete-container/athlete-container.component';
import {AthleteDetailsComponent} from '../athlete-details/athlete-details.component';
import {AthleteEventsComponent} from '../athlete-events/athlete-events.component';
import {AthleteService} from '../../../services/athlete.service';
import {BaseRequestOptions, Http} from '@angular/http';
import {MockBackend} from '@angular/http/testing';
import {ApiService} from '../../../services/api.service';
import {SingleMedalCountComponent} from '../../medals/single-medal-count/single-medal-count.component';
import {TripleMedalCountComponent} from '../../medals/triple-medal-count/triple-medal-count.component';
import {ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Component({
  template: `<app-athletes-page></app-athletes-page>`
})

class TestHostComponent {
}

describe('AthletesPageComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AthletesPageComponent,
        AthleteContainerComponent,
        AthleteDetailsComponent,
        AthleteEventsComponent,
        TestHostComponent,
        TripleMedalCountComponent,
        SingleMedalCountComponent
      ],
      providers:    [
        { provide: ActivatedRoute, useValue: { 'params': Observable.from([{ 'countryId': 'RUS' }]) } },
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backendInstance, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
        AthleteService, ApiService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AthletesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create athletes page component', () => {
    expect(component).toBeTruthy();
  });
});
