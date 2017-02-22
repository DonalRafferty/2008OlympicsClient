import { Component, OnInit } from '@angular/core';
import {AthleteService} from '../../../services/athlete.service';
import {Athlete} from '../../../classes/athlete';
import {ActivatedRoute} from '@angular/router';
import 'rxjs'

@Component({
  selector: 'app-athletes-page',
  templateUrl: './athletes-page.component.html',
  styleUrls: ['./athletes-page.component.css']
})
export class AthletesPageComponent implements OnInit {
  /*
    Athlete page component responsible for displaying
    the list of athletes
   */
  athletes: Athlete[];
  countryName: string;

  constructor(private athleteService: AthleteService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.countryName = params.countryId; //Get the country id for this list
    });
    // Call the athlete service to get athletes by country
    this.athleteService.getAthletesByCountry(this.countryName)
      .subscribe(response => {
        this.athletes = response.body;
      });
  }
}
