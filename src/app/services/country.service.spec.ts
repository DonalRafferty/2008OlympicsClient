/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CountryService } from './country.service';
import {ApiService} from './api.service';
import {Http, ConnectionBackend, BaseRequestOptions, Response, ResponseOptions} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';

describe('Service: Country', () => {
  let subject: CountryService;
  let backend: MockBackend;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountryService, ApiService,
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

  beforeEach(inject([CountryService, MockBackend], (countryService: CountryService, mockBackend: MockBackend) => {
    subject = countryService;
    backend = mockBackend;
  }));

  it('should create service', inject([CountryService], (service: CountryService) => {
    expect(service).toBeTruthy();
  }));
  it('should call getCountries and return it\'s result', (done) => {
    backend.connections.subscribe((connection: MockConnection) => {
      let options = new ResponseOptions({
        body: JSON.stringify({ success: true })
      });
      connection.mockRespond(new Response(options));
    });

    subject
      .getCountries()
      .subscribe((response) => {
        expect(response.body).toEqual({ success: true });
        done();
      });
  });
});
