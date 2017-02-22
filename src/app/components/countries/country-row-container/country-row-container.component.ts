import {Component, Input} from '@angular/core';
import {Country} from '../../../classes/country';
import {Router} from '@angular/router';

@Component({
  selector: 'app-country-row-container',
  templateUrl: './country-row-container.component.html',
  styleUrls: ['./country-row-container.component.css']
})
export class CountryRowContainerComponent {
  /*
    Component for showing the country name along
    with row of medals and total
   */
  @Input() country: Country;
  constructor(private router: Router) {
  }

  goToAthletes(): void {
    this.router.navigate(['/athletes/' + this.country.name]);
  }
}
