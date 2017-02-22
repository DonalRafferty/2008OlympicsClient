import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Response} from '../classes/response';
import {ApiService} from './api.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Country} from '../classes/country';

@Injectable()
export class CountryService {

  /*
    Service for calling the /countries endpoint
   */
  private countryUrl = '/countries';

  constructor(private apiService: ApiService) {
  }

  getCountries(): Observable<Response<Country []>> {
    return this.apiService.get(this.countryUrl)
      .map(rs => new Response<any []>(rs.json(), null))
      .catch(error => Observable.throw('ApiErrorService'));
  }

}
