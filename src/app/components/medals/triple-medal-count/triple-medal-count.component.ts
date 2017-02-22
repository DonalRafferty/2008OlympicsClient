import {Component, Input} from '@angular/core';
import {Medals} from '../../../classes/medals';

@Component({
  selector: 'app-triple-medal-count',
  templateUrl: './triple-medal-count.component.html',
  styleUrls: ['./triple-medal-count.component.css']
})
export class TripleMedalCountComponent {
  /*
    Presentation component for showing
    three medals with the count in a row
   */
  @Input() medals: Medals;

}
