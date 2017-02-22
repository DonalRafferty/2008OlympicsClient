import {Component, Input} from '@angular/core';
import {Athlete} from '../../../classes/athlete';

@Component({
  selector: 'app-athlete-container',
  templateUrl: './athlete-container.component.html',
  styleUrls: ['./athlete-container.component.css']
})
export class AthleteContainerComponent {
  /*
    Presentation component responsible for tying all
    the athlete components together in card format
   */
  @Input() athlete: Athlete;
}
