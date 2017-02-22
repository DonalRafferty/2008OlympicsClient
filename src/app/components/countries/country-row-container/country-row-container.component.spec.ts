/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {Component} from '@angular/core';

import { CountryRowContainerComponent } from './country-row-container.component';
import {MedalCountTotalComponent} from '../../medals/medal-count-total/medal-count-total.component';
import {SingleMedalCountComponent} from '../../medals/single-medal-count/single-medal-count.component';
import {TripleMedalCountComponent} from '../../medals/triple-medal-count/triple-medal-count.component';
import {Country} from '../../../classes/country';
import {Router} from '@angular/router';

@Component({
  template: `<app-country-row-container [country]="country"></app-country-row-container>`
})
class TestHostComponent {
  country: Country = {
    name: 'USA',
    medals:{
      gold: 3,
      silver: 7,
      bronze: 11
    }
  }
}

class RouterStub {
  navigate(url: string[]) { return url[0]; }
}

describe('CountryRowContainerComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let countEl, totalEl, countryNameEl;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryRowContainerComponent,
                      MedalCountTotalComponent,
                      TripleMedalCountComponent,
                      SingleMedalCountComponent,
                      TestHostComponent],
      providers: [
        { provide: Router, useClass: RouterStub},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    countEl = fixture.debugElement.queryAll(By.css('.count'));
    totalEl = fixture.debugElement.query(By.css('.total'));
    countryNameEl = fixture.debugElement.query(By.css('.country'));
    fixture.detectChanges();
  });

  it('should create row container', () => {
    expect(component).toBeTruthy();
  });
  it('should show the correct initial values from medals object', () => {
    expect(countEl[0].nativeElement.textContent).toContain(3);
    expect(countEl[1].nativeElement.textContent).toContain(7);
    expect(countEl[2].nativeElement.textContent).toContain(11);
  });
  it('should show update values from medals object', () => {
    component.country.medals = {
      gold: 15,
      silver: 0,
      bronze: 78
    };
    fixture.detectChanges();
    expect(countEl[0].nativeElement.textContent).toContain(15);
    expect(countEl[1].nativeElement.textContent).toContain(0);
    expect(countEl[2].nativeElement.textContent).toContain(78);
  });
  it('total should be correct from initial values', () => {
    expect(totalEl.nativeElement.textContent).toContain(21);
  });
  it('total should be correct upon updated values from medals object ', () => {
    component.country.medals = {
      gold: 15,
      silver: 0,
      bronze: 78
    };
    fixture.detectChanges();
    expect(totalEl.nativeElement.textContent).toContain(93);
  });
  it('country should be correct from initial values', () => {
    expect(countryNameEl.nativeElement.textContent).toContain('USA');
  });
  it('country should be correct upon updated values', () => {
    component.country.name = 'RUS';
    fixture.detectChanges();
    expect(countryNameEl.nativeElement.textContent).toContain('RUS');
  });
});
