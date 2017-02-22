import {Component, Input} from '@angular/core';
import {Medals} from '../../../classes/medals';

@Component({
  selector: 'app-medal-count-total',
  templateUrl: './medal-count-total.component.html',
  styleUrls: ['./medal-count-total.component.css']
})
export class MedalCountTotalComponent {
  /*
   Presentation component for showing three medals
   with their count in a row plus the total at the
   end of the row
   */
  @Input() medals: Medals;
}
