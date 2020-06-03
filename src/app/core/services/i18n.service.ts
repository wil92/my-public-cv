import {Injectable, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {
  MissingTranslationHandler,
  TranslateCompiler,
  TranslateLoader,
  TranslateParser,
  TranslateService,
  TranslateStore
} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class I18nService extends TranslateService implements OnDestroy {
  /**
   * Subscriptions storage to unsubscribe all after component been destroyed.
   */
  subscriptionsManager: Subscription = new Subscription();

  constructor(currentLoader: TranslateLoader, store: TranslateStore, compiler: TranslateCompiler,
              parser: TranslateParser, missingTranslationHandler: MissingTranslationHandler,
  ) {
    super(store, currentLoader, compiler, parser, missingTranslationHandler);
  }

  translateDynamic(key: string, targetVar: string, target: any = this): void {
    this.translate(key, targetVar, target);
    const subscription = this.onLangChange.subscribe(() => {
      this.translate(key, targetVar, target);
    });
    this.subscriptionsManager.add(subscription);
  }

  translate(key: string, targetVar: string, target: any = this): void {
    target[targetVar] = this.instant(key);
  }

  /**
   * Unsubscribe all the subscriptions through the subscriptionsManager.
   */
  ngOnDestroy() {
    this.subscriptionsManager.unsubscribe();
  }
}

