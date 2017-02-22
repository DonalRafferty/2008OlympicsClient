/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ApiService } from './api.service';
import {BaseRequestOptions, Http, ResponseOptions, Response} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';

describe('Service: Api', () => {
  let subject: ApiService;
  let backend: MockBackend;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backendInstance, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        }, ApiService]
    });
  });

  beforeEach(inject([ApiService, MockBackend], (apiService: ApiService, mockBackend: MockBackend) => {
    subject = apiService;
    backend = mockBackend;
  }));

  it('should create service', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));
  it('should call get and return it\'s result', (done) => {
    backend.connections.subscribe((connection: MockConnection) => {
      let options = new ResponseOptions({
        body: JSON.stringify({success: true})
      });
      connection.mockRespond(new Response(options));
    });

    subject
      .get('mockPath')
      .subscribe((response) => {
        expect(response.json()).toEqual({success: true});
        done();
      });
  });
  it('should call post and return it\'s result', (done) => {
    backend.connections.subscribe((connection: MockConnection) => {
      let options = new ResponseOptions({
        body: JSON.stringify({success: true})
      });
      connection.mockRespond(new Response(options));
    });

    subject
      .post('mockPath', {})
      .subscribe((response) => {
        expect(response.json()).toEqual({success: true});
        done();
      });
  });
  it('should call patch and return it\'s result', (done) => {
    backend.connections.subscribe((connection: MockConnection) => {
      let options = new ResponseOptions({
        body: JSON.stringify({success: true})
      });
      connection.mockRespond(new Response(options));
    });

    subject
      .patch('mockPath', {})
      .subscribe((response) => {
        expect(response.json()).toEqual({success: true});
        done();
      });
  });
  it('should call patch and return it\'s result', (done) => {
    backend.connections.subscribe((connection: MockConnection) => {
      let options = new ResponseOptions({
        body: JSON.stringify({success: true})
      });
      connection.mockRespond(new Response(options));
    });

    subject
      .post('mockPath', {})
      .subscribe((response) => {
        expect(response.json()).toEqual({success: true});
        done();
      });
  });
  it('should call patch and return it\'s result', (done) => {
    backend.connections.subscribe((connection: MockConnection) => {
      let options = new ResponseOptions({
        body: JSON.stringify({success: true})
      });
      connection.mockRespond(new Response(options));
    });

    subject
      .delete('mockPath')
      .subscribe((response) => {
        expect(response.json()).toEqual({success: true});
        done();
      });
  });
});
