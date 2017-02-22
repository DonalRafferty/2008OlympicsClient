/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {Component} from '@angular/core';
import { MedalCountTotalComponent } from './medal-count-total.component';
import {Medals} from '../../../classes/medals';
import {TripleMedalCountComponent} from '../triple-medal-count/triple-medal-count.component';
import {SingleMedalCountComponent} from '../single-medal-count/single-medal-count.component';

@Component({
  template: `<app-medal-count-total [medals]="medals"></app-medal-count-total>`
})
class TestHostComponent {
  medals: Medals = {
    gold: 3,
    silver: 7,
    bronze: 11
  }
}

describe('MedalCountTotalComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let countEl, totalEl;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedalCountTotalComponent,
                      TripleMedalCountComponent,
                      SingleMedalCountComponent,
                      TestHostComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    countEl = fixture.debugElement.queryAll(By.css('.count'));
    totalEl = fixture.debugElement.query(By.css('.total'));
    fixture.detectChanges();
  });

  it('should create medal count', () => {
    expect(component).toBeTruthy();
  });
  it('should show the correct initial values from medals object', () => {
    expect(countEl[0].nativeElement.textContent).toContain(3);
    expect(countEl[1].nativeElement.textContent).toContain(7);
    expect(countEl[2].nativeElement.textContent).toContain(11);
  });
  it('should show update values from medals object', () => {
    component.medals = {
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
    component.medals = {
      gold: 15,
      silver: 0,
      bronze: 78
    };
    fixture.detectChanges();
    expect(totalEl.nativeElement.textContent).toContain(93);
  });
});
