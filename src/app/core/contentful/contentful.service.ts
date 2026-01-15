import {Inject, Injectable} from '@angular/core';

import {ContentfulClientApi, createClient} from 'contentful';
import {BehaviorSubject, Observable} from 'rxjs';
import {fromPromise} from 'rxjs/internal-compatibility';
import 'regenerator-runtime/runtime';

import {ENVIRONMENT} from '../config';
import {Environment} from '../models/environment';


@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  private data = new Map<string, any>();
  private observables = new Map<string, BehaviorSubject<any>>();

  private contentfulClient: ContentfulClientApi<any>;

  constructor(@Inject(ENVIRONMENT) private env: Environment) {
    this.contentfulClient = createClient({
      accessToken: env.accessToken,
      space: env.space
    });
  }

  fetchContentType(contentTypeId: string): Observable<any> {
    return fromPromise(this.contentfulClient.getEntries({content_type: contentTypeId})
      .then((res) => {
        if (res.items.length) {
          this.data.set(contentTypeId, res.items[0]?.fields);
          this.checkObservable(contentTypeId);
          this.observables.get(contentTypeId).next(res.items[0]?.fields);
          return res.items[0].fields;
        }
      }));
  }

  snapShot(contentTypeId: string): any {
    return this.data.get(contentTypeId);
  }

  select(contentTypeId: string): Observable<any> {
    this.checkObservable(contentTypeId);
    return this.observables.get(contentTypeId);
  }

  private checkObservable(contentTypeId) {
    if (!this.observables.has(contentTypeId)) {
      this.observables.set(contentTypeId, new BehaviorSubject<any>(null));
    }
  }
}
