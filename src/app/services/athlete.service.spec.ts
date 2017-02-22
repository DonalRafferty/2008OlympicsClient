/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AthleteService } from './athlete.service';
import {ApiService} from './api.service';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {BaseRequestOptions, Http, ResponseOptions, Response} from '@angular/http';

describe('Service: Athlete', () => {
  let subject: AthleteService;
  let backend: MockBackend;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AthleteService, ApiService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backendInstance, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        }]
    });
  });

  beforeEach(inject([AthleteService, MockBackend], (athleteService: AthleteService, mockBackend: MockBackend) => {
    subject = athleteService;
    backend = mockBackend;
  }));

  it('should create service', inject([AthleteService], (service: AthleteService) => {
    expect(service).toBeTruthy();
  }));
  it('should call getAthletesByCountry and return it\'s result', (done) => {
    backend.connections.subscribe((connection: MockConnection) => {
      let options = new ResponseOptions({
        body: JSON.stringify({ success: true })
      });
      connection.mockRespond(new Response(options));
    });

    subject
      .getAthletesByCountry('RUS')
      .subscribe((response) => {
        expect(response.body).toEqual({ success: true });
        done();
      });
  });
  it('should call getAthletes and return it\'s result', (done) => {
    backend.connections.subscribe((connection: MockConnection) => {
      let options = new ResponseOptions({
        body: JSON.stringify({ success: true })
      });
      connection.mockRespond(new Response(options));
    });

    subject
      .getAthletes()
      .subscribe((response) => {
        expect(response.body).toEqual({ success: true });
        done();
      });
  });
});
