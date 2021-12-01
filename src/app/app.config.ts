import {InjectionToken} from '@angular/core';

export interface AppConfig {
  rootUrl: string;
}

export let APP_CONFIG = new InjectionToken<AppConfig>('APP_CONFIG');
