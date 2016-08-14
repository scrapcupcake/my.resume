/*
 * These are globally available services in any component or any other service
 */

// Angular 2
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
// Angular 2 Http
import { HTTP_PROVIDERS } from '@angular/http';
// Angular 2 Router
import { provideRouter } from '@angular/router';
// Angular 2 forms
// AngularClass
import { provideWebpack } from '@angularclass/webpack-toolkit';
import { providePrefetchIdleCallbacks } from '@angularclass/request-idle-callback';

/*
* Application Providers/Directives/Pipes
* providers/directives/pipes that only live in our browser environment
*/
export const APPLICATION_PROVIDERS = [
  // new Angular 2 forms
  ...HTTP_PROVIDERS,

  { provide: LocationStrategy, useClass: PathLocationStrategy }
];

export const PROVIDERS = [
  ...APPLICATION_PROVIDERS
];
