import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {CountryService} from './services/country.service';
import {AthleteService} from './services/athlete.service';
import {ApiService} from './services/api.service';
import { SingleMedalCountComponent } from './components/medals/single-medal-count/single-medal-count.component';
import { TripleMedalCountComponent } from './components/medals/triple-medal-count/triple-medal-count.component';
import { MedalCountTotalComponent } from './components/medals/medal-count-total/medal-count-total.component';
import { AthleteDetailsComponent } from './components/athletes/athlete-details/athlete-details.component';
import { AthleteContainerComponent } from './components/athletes/athlete-container/athlete-container.component';
import { CountryRowContainerComponent } from './components/countries/country-row-container/country-row-container.component';
import { AthleteEventsComponent } from './components/athletes/athlete-events/athlete-events.component';
import {Routes, RouterModule} from '@angular/router';
import { CountriesPageComponent } from './components/countries/countries-page/countries-page.component';
import { AthletesPageComponent } from './components/athletes/athletes-page/athletes-page.component';
import { BannerComponent } from './components/common/banner/banner.component';

const appRoutes: Routes = [
  {
    path: 'countries',
    component: CountriesPageComponent
  },
  {
    path: 'athletes/:countryId',
    component: AthletesPageComponent
  },
  { path: '',
    redirectTo: '/countries',
    pathMatch: 'full'
  },
  { path: '**', component: CountriesPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SingleMedalCountComponent,
    TripleMedalCountComponent,
    MedalCountTotalComponent,
    AthleteDetailsComponent,
    AthleteContainerComponent,
    CountryRowContainerComponent,
    AthleteEventsComponent,
    CountriesPageComponent,
    AthletesPageComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ApiService,
    CountryService,
    AthleteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
