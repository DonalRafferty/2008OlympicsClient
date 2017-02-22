import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-athlete-events',
  templateUrl: './athlete-events.component.html',
  styleUrls: ['./athlete-events.component.css']
})

export class AthleteEventsComponent {
  /*
    Presentation component responsible for
    showing the events of an athlete in a list
   */
  @Input() events: Event[];
}
