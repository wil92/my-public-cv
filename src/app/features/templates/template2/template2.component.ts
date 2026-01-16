import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {faPrint} from '@fortawesome/free-solid-svg-icons';

import {Curriculum} from '../../../core/models';
import {endDateToShow} from '../../../shared/utils';
import {WINDOW} from '../../../core/config';

@Component({
  selector: 'app-template2',
  templateUrl: './template2.component.html',
  styleUrls: ['./template2.component.scss'],
  standalone: false
})
export class Template2Component implements OnInit {

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
