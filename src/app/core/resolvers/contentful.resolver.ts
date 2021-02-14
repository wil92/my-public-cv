import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

import {forkJoin, Observable} from 'rxjs';

import {ContentfulService} from '../contentful/contentful.service';

@Injectable()
export class ContentfulResolver implements Resolve<any[]> {
  constructor(private contentful: ContentfulService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any[]> | Promise<any[]> | any[] {
    return forkJoin<any>(route.data?.contentful.map(id => this.contentful.fetchContentType(id)) as Array<Observable<any>>);
  }
}
