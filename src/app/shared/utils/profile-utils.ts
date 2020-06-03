import {TranslateService} from '@ngx-translate/core';

export const endDateToShow = (startDate: Date, endDate: Date, i18nService?: TranslateService) => {
  if (endDate && startDate && endDate.getFullYear() === startDate.getFullYear()) {
    return '';
  }
  return '-' + (endDate && endDate.getFullYear() || ((!!i18nService) ? i18nService.instant('present') : 'present'));
};
