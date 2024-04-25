import {ApplicationConfig, LOCALE_ID, isDevMode} from '@angular/core';
import {registerLocaleData} from "@angular/common";
import {PreloadAllModules, provideRouter, withPreloading} from '@angular/router';

import {routes} from './app.routes';
import {provideAnimations} from "@angular/platform-browser/animations";
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';

import localeEs from "@angular/common/locales/es";
import {provideHttpClient, withFetch} from "@angular/common/http";
import {provideServiceWorker} from '@angular/service-worker';

registerLocaleData(localeEs);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideAnimations(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
    {provide: LOCALE_ID, useValue: 'es-ES'},
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ]
};
