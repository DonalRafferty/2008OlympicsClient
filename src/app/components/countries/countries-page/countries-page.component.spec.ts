/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { CountriesPageComponent } from './countries-page.component';
import {SingleMedalCountComponent} from '../../medals/single-medal-count/single-medal-count.component';
import {TripleMedalCountComponent} from '../../medals/triple-medal-count/triple-medal-count.component';
import {MedalCountTotalComponent} from '../../medals/medal-count-total/medal-count-total.component';
import {CountryRowContainerComponent} from '../country-row-container/country-row-container.component';
import {CountryService} from '../../../services/country.service';
import {ApiService} from '../../../services/api.service';
import {Http, BaseRequestOptions} from '@angular/http';
import {MockBackend} from '@angular/http/testing';

@Component({
  template: `<app-countries-page></app-countries-page>`
})

class TestHostComponent {
}

describe('CountriesPageComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ CountriesPageComponent,
        CountryRowContainerComponent,
        MedalCountTotalComponent,
        TripleMedalCountComponent,
        SingleMedalCountComponent,
        TestHostComponent],
      providers:    [
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backendInstance, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
        CountryService, ApiService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the country page component', () => {
    expect(component).toBeTruthy();
  });
});
