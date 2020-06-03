import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {Curriculum} from '../models';
import {I18nService} from '../services/i18n.service';
import {environment} from "../../../environments/environment";

@Injectable()
export class CurriculumResolver implements Resolve<Curriculum> {
  constructor(
    private http: HttpClient,
    private i18nService: I18nService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Curriculum> | Promise<Curriculum> | Curriculum {
    const langRegex = /.*-([a-z]{2})\.json$/;
    const cv = environment.cv;
    const techFilter = (route.paramMap.has('tech') ? route.paramMap.get('tech').split(',').map(tech => tech.trim().toLowerCase()) : []);
    const lang = (langRegex.test(cv)) ? cv.match(langRegex)[1] : '';
    if (lang !== '') {
      this.i18nService.use(lang);
    }
    return this.http.get(`assets/cvs/${cv}`)
      .pipe(map((data: Curriculum) => {
        if (data.hasOwnProperty('programmingLanguages')) {
          data.programmingLanguages = this.flatObjectValues(data.programmingLanguages);
        }
        if (data.hasOwnProperty('experienceTime')) {
          const startWorking = Date.parse(data.experienceTime);
          if (!isNaN(startWorking)) {
            data.experienceTime = Math.floor((Date.now() - startWorking) / (1000 * 3600 * 24 * 365.25)) + '+ ' +
              this.i18nService.instant('years');
          }
        }
        if (data.hasOwnProperty('experience')) {
          data.experience.map((job) => {
            if (!job.hasOwnProperty('description') || job.description === '') {
              job.description = '';
              if (job.hasOwnProperty('projects')) {
                const projects = job.projects.filter((project) => {
                  return techFilter.length === 0 || techFilter.filter(value => project.technologies.map(
                    tech => tech.toLowerCase()
                  ).includes(value)).length > 0;
                }).map(project => project.name);
                let technologies = [];
                job.projects.filter((value) => techFilter.length === 0 || projects.includes(value.name)).forEach((project) => {
                  technologies = technologies.concat(this.flatObjectValues(project.technologies));
                });
                if (projects.length) {
                  job.description += '- **' + this.i18nService.instant('projects') +
                    '**: \n\n' + '  - ' + projects.join('\n  - ') + '\n\n';
                }
                if (technologies.length) {
                  job.description += '- **' + this.i18nService.instant('technologies') +
                    '**: ' + [...new Set(technologies)].sort().join(', ') + '\n\n';
                }
              }
            }
            return job;
          });
        }
        return this.toDate(data as Curriculum);
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
