import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {Curriculum} from '../models';
import {ContentfulService} from '../contentful/contentful.service';
import {ContentNames} from '../contentful/content-names';

@Injectable()
export class CurriculumResolver implements Resolve<Curriculum> {
  constructor(
    private contentful: ContentfulService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Curriculum> | Promise<Curriculum> | Curriculum {
    return this.contentful.fetchContentType(ContentNames.MY_CV).pipe(map((res) => {
      return this.toDate({
        ...res,
        personUrl: res.personUrl?.fields?.file?.url
      } as Curriculum);
    }));
  }

  toDate(data: Curriculum): Curriculum {
    if (!data) {
      return data;
    }
    const keys = Object.keys(data);
    for (const key of keys) {
      if (['startDate', 'endDate'].includes(key)) {
        data[key] = new Date(data[key]);
      } else if (typeof data[key] === 'object') {
        data[key] = this.toDate(data[key]);
      }
    }
    return data;
  }
}
