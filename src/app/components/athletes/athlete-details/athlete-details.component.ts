import {Component, Input} from '@angular/core';
import {Athlete} from '../../../classes/athlete';

@Component({
  selector: 'app-athlete-details',
  templateUrl: './athlete-details.component.html',
  styleUrls: ['./athlete-details.component.css']
})
export class AthleteDetailsComponent {
  /*
    Component responsible for showing the athletes
    details, name, country, sex
   */
  @Input() athlete: Athlete;

  // Get a random color for the athletes initial
  getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++ ) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

}
