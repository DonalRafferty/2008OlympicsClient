import {Component, Input} from '@angular/core';

export type medalTypeString = 'gold' | 'silver' | 'bronze';

@Component({
  selector: 'app-single-medal-count',
  templateUrl: './single-medal-count.component.html',
  styleUrls: ['./single-medal-count.component.css']
})

export class SingleMedalCountComponent {
  /*
   Presentation component for showing colored medal
   and the count to the right of it
   */
  @Input() medalType: medalTypeString;
  @Input() medalCount: number;

}
