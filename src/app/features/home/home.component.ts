import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener, Inject,
  OnInit,
  ViewChild
} from '@angular/core';

import {faPhone, faEnvelope, faArrowRight} from '@fortawesome/free-solid-svg-icons';

import {ContentfulService} from '../../core/contentful/contentful.service';
import {ContentNames} from '../../core/contentful/content-names';
import {ActivatedRoute} from "@angular/router";
import {WINDOW} from "../../core/config";

@Component({
  selector: 'cv-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewChecked {

  @ViewChild('actions_container')
  actionsContainer: ElementRef;
  actionHeight = 0;

  socials = [];
  actions = [];
  projects = [];

  i18nData: any;

  phoneIcon = faPhone;
  mailIcon = faEnvelope;
  arrowRightIcon = faArrowRight;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateActionButtonsSize();
  }

  constructor(
    private contentful: ContentfulService,
    private route: ActivatedRoute,
    @Inject(WINDOW) private window: Window,
    private cdref: ChangeDetectorRef) {
  }

  ngAfterViewChecked(): void {
    this.updateActionButtonsSize();
  }

  ngOnInit(): void {
    this.contentful.select(ContentNames.MY_CV_HOME).subscribe((data: any) => {
      this.i18nData = data;
      console.log(data);
      import('@fortawesome/free-solid-svg-icons').then(v => {
        this.actions = data?.actions?.map(action => ({...action, icon: v[action?.icon]}));
      });
      import('@fortawesome/free-brands-svg-icons').then(v => {
        this.socials = data?.socials?.map(social => ({...social, icon: v[social?.icon]}));
      });
    });

    this.scrollToSection();
  }

  scrollToSection() {
    const fragment = this.route.snapshot.fragment;
    if (fragment) {
      console.log(fragment)
      const value = this.window.document.getElementById(fragment);
      if (value) {
        value.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'start'});
      }
    }
  }

  updateActionButtonsSize() {
    const FIRST_CHILD = 0;
    const actions = this.actionsContainer?.nativeElement?.children;
    // noinspection JSSuspiciousNameCombination
    this.actionHeight = actions?.length ? actions[FIRST_CHILD]?.clientWidth : this.actionHeight;
    this.cdref.detectChanges();
  }

  getDate() {
    return new Date().getFullYear();
  }
}
