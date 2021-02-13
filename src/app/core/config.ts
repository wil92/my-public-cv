import { InjectionToken } from '@angular/core';

export const WINDOW = new InjectionToken<Window>('WINDOW');
export const ENVIRONMENT = new InjectionToken<string>('ENVIRONMENT');

export const windowFactory = () => typeof window !== 'undefined' ? window : undefined;
