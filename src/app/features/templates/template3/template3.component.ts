import {AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {faPrint} from '@fortawesome/free-solid-svg-icons';

import {Curriculum} from '../../../core/models';
import {endDateToShow} from '../../../shared/utils';
import {WINDOW} from '../../../core/config';
import {timer} from "rxjs";

@Component({
  selector: 'app-template3',
  templateUrl: './template3.component.html',
  styleUrls: ['./template3.component.scss']
})
export class Template3Component implements OnInit, AfterViewInit {

  printIcon = faPrint;

  curriculum: Curriculum;

  tilesCount = 10;

  constructor(private route: ActivatedRoute,
              @Inject(WINDOW) private window: Window) {
    route.data.subscribe((data) => {
      this.curriculum = data.curriculum;
    });
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.printAction();
  }

  progressTilesCount(percent): number {
    percent = percent || 0;
    return Math.round(this.tilesCount * percent / 100);
  }

  createArray(length) {
    return new Array(length);
  }

  endDate(startDate: Date, endDate: Date) {
    return endDateToShow(startDate, endDate);
  }

  printAction() {
    this.window.print();
  }
}
