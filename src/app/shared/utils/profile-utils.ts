export const endDateToShow = (startDate: Date, endDate: Date) => {
  if (endDate && startDate && endDate.getFullYear() === startDate.getFullYear()) {
    return '';
  }
  return '-' + (endDate && endDate.getFullYear() || 'present');
};
