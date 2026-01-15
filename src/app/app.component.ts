import {Component} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

import {environment} from '../environments/environment';

declare let gtag: (property: string, value: any, configs: any) => {};

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent {
  constructor(public router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        gtag('config', environment.googleAnalyticsId, {
          page_path: event.urlAfterRedirects
        });
      }
    });
  }
}
