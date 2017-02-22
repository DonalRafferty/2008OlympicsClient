/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {DebugElement, Component} from '@angular/core';

import {SingleMedalCountComponent, medalTypeString} from './single-medal-count.component';

@Component({
  template: `<app-single-medal-count [medalType]="medalType" [medalCount]="medalCount"></app-single-medal-count>`
})
class TestHostComponent {
  medalType: medalTypeString = 'gold';
  medalCount: number = 3;
}

describe('SingleMedalCountComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let countEl;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleMedalCountComponent, TestHostComponent ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    countEl = fixture.debugElement.query(By.css('.count'));
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
  it('should show a value of 3 in the count section', () => {
    expect(countEl.nativeElement.textContent).toContain(3);
  });
  it('should show a value of 10 in the count section', () => {
    const expectedCount = component.medalCount = 10;
    fixture.detectChanges();
    expect(countEl.nativeElement.textContent).toContain(expectedCount);
  });
});
