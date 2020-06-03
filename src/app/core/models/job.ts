export interface Job {
  startDate: Date;
  endDate?: Date;
  name: string;
  description?: string;
  roles?: [string];
  projects: [{ name: string, technologies?: [string] }]
  breakPage?: boolean;
}
