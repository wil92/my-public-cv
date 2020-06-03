import {Education} from './education';
import {Job} from './job';
import {Skill} from './skill';
import {Social} from './social';
import {Language} from './language';

export interface Curriculum {
  name: string;
  status: string;
  experienceTime: string;
  personUrl: string;
  personalDescription: string;
  personalStatement: string;
  address: string;
  phoneNumbers: [string];
  emails: [string];
  programmingLanguages: [string]|object;
  libraries: [string];
  methodologies: [string];
  mobileTechnologies: [string];
  desktopTechnologies: [string];
  devops: [string];
  databases: [string];
  ormLibraries: [string];
  ideTools: [string];
  versionControlTools: [string];
  buildTools: [string];
  ciTools: [string];
  operatingSystems: [string];
  otherTools: [string];
  siteWeb: string;
  profile: string;
  education: [Education];
  experience: [Job];
  skills: [Skill];
  social: [Social];
  languages: [Language];
  achievements: [string];
}
