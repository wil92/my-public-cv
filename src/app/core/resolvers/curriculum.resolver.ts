import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {Curriculum, Education, Job} from '../models';
import {ContentfulService} from '../contentful/contentful.service';

@Injectable()
export class CurriculumResolver implements Resolve<Curriculum> {
  constructor(
    private contentful: ContentfulService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Curriculum> | Promise<Curriculum> | Curriculum {
    return this.contentful.fetchContentType('myCv').pipe(map((res) => {
      return {
        ...res,
        education: res.education?.map((edu: Education) => ({
          ...edu,
          endDate: new Date(edu.endDate),
          startDate: new Date(edu.startDate)
        } as Education)),
        experience: res.experience?.map((exp: Job) => ({
          ...exp,
          endDate: new Date(exp.endDate),
          startDate: new Date(exp.startDate),
        }) as Job),
        personUrl: res.personUrl?.fields?.file?.url
      } as Curriculum;
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

  flatObjectValues(data): string[] {
    let result = [];
    if (Array.isArray(data)) {
      data.forEach(item => {
        result = result.concat(this.flatObjectValues(item));
      });
    } else if (typeof data === 'object') {
      Object.keys(data).forEach(key => {
        result = result.concat(this.flatObjectValues(data[key]));
      });
    } else {
      result.push(data);
    }
    return [...new Set(result)];
  }
}
