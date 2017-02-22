/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';

import { TripleMedalCountComponent } from './triple-medal-count.component';
import {Medals} from '../../../classes/medals';
import {SingleMedalCountComponent} from '../single-medal-count/single-medal-count.component';

@Component({
  template: `<app-triple-medal-count [medals]="medals"></app-triple-medal-count>`
})
class TestHostComponent {
  medals: Medals = {
    gold: 3,
    silver: 7,
    bronze: 11
  }
}

describe('TripleMedalCountComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let countEl;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripleMedalCountComponent,
        SingleMedalCountComponent,
        TestHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    countEl = fixture.debugElement.queryAll(By.css('.count'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should show the correct initial values from medals object', () => {
    expect(countEl[0].nativeElement.textContent).toContain(3);
    expect(countEl[1].nativeElement.textContent).toContain(7);
    expect(countEl[2].nativeElement.textContent).toContain(11);
  });
  it('should show update values from medals object', () => {
    const expectedCount = component.medals = {
      gold: 15,
      silver: 0,
      bronze: 78
    };
    fixture.detectChanges();
    expect(countEl[0].nativeElement.textContent).toContain(15);
    expect(countEl[1].nativeElement.textContent).toContain(0);
    expect(countEl[2].nativeElement.textContent).toContain(78);
  });
});
