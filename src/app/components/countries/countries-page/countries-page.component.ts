import { Component, OnInit } from '@angular/core';
import {CountryService} from '../../../services/country.service';
import {Country} from '../../../classes/country';

@Component({
  selector: 'app-countries-page',
  templateUrl: './countries-page.component.html',
  styleUrls: ['./countries-page.component.css']
})
export class CountriesPageComponent implements OnInit {
  /*
    Countries page component responsible for
    showing the countries in a list
   */
  countries: Country[];

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    // Call the country service to get the list of countries
    this.countryService.getCountries()
      .subscribe(response => {
        this.countries = response.body;
      });
  }

}
