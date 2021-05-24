import {ApplicationConfig, LOCALE_ID} from '@angular/core';
import {registerLocaleData} from "@angular/common";
import {PreloadAllModules, provideRouter, withPreloading} from '@angular/router';

import {routes} from './app.routes';
import {provideAnimations} from "@angular/platform-browser/animations";
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';

import localeEs from "@angular/common/locales/es";
registerLocaleData(localeEs);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideAnimations(),
    provideAnimationsAsync(),
    {provide: LOCALE_ID, useValue: 'es-ES'},
  ]
};
