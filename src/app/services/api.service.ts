import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { environment } from '../../environments/environment';

@Injectable()
export class ApiService {
  /*
    Base service for handling all rest based HTTP calls
   */
  private baseUrl = environment.baseUrl;

  constructor(private http: Http) {
  }

  get(path: string): Observable<Response> {
    return this.http.get(this.baseUrl+path)
      .catch(e => this.handleError(e));
  }

  post(path: string, body: any): Observable<Response> {
    return this.http.post(this.baseUrl + path, body)
      .catch(e => this.handleError(e));
  }

  patch(path: string, body: any): Observable<Response> {
    return this.http.patch(this.baseUrl + path, body)
      .catch(e => this.handleError(e));
  }

  put(path: string, body: any): Observable<Response> {
    return this.http.put(this.baseUrl + path, body)
      .catch(e => this.handleError(e));
  }

  delete(path: string): Observable<Response> {
    return this.http.delete(this.baseUrl + path)
      .catch(e => this.handleError(e));
  }

  /*
    Generic error handler
   */
  handleError(e: any) {
    if (e.headers && e.headers.get('content-type') && e.headers.get('content-type').indexOf('json') === -1) {
      return Observable.throw('ApiError');
    }
    return Observable.throw(e);
  }

}
