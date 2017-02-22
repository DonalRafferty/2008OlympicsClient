import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Response} from '../classes/response';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Athlete} from '../classes/athlete';

@Injectable()
export class AthleteService {
  /*
    Service for calling the /athletes endpoint
   */
  private athleteUrl = '/athletes';

  constructor(private apiService: ApiService) {
  }

  getAthletes(): Observable<Response<Athlete []>> {
    return this.apiService.get(this.athleteUrl)
      .map(rs => new Response<any []>(rs.json(), null))
      .catch(error => Observable.throw('ApiErrorService'));
  }

  getAthletesByCountry(country: string): Observable<Response<Athlete []>> {
    return this.apiService.get(this.athleteUrl + '/country/' + country)
      .map(rs => new Response<any []>(rs.json(), null))
      .catch(error => Observable.throw('ApiErrorService'));
  }

}
