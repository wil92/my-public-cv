import {Inject, Injectable} from '@angular/core';

import {ContentfulClientApi, createClient} from 'contentful';
import {Observable} from 'rxjs';
import {fromPromise} from 'rxjs/internal-compatibility';
import 'regenerator-runtime/runtime';

import {ENVIRONMENT} from '../config';
import {Environment} from '../models/environment';


@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  data = new Map<string, any>();

  contentfulClient: ContentfulClientApi;

  constructor(@Inject(ENVIRONMENT) private env: Environment) {
    this.contentfulClient = createClient({
      accessToken: env.accessToken,
      space: env.space,
      resolveLinks: true
    });
    // this.contentfulClient.getAsset('1ifod0NvtVhf0wcVjPKRdD').then(console.log);
  }

  fetchContentType(contentTypeId: string): Observable<any> {
    return fromPromise(this.contentfulClient.getEntries({content_type: contentTypeId})
      .then((res) => {
        if (res.items.length) {
          this.data.set(contentTypeId, res.items[0].fields);
          return res.items[0].fields;
        }
      }));
  }

  getContentType(contentTypeId: string): any {
    return this.data.get(contentTypeId);
  }
}
