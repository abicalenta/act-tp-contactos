import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection,  } from '../../node_modules/@angular/core/index';
import { routes } from './app.routes';
import { provideRouter } from '../../node_modules/@angular/router/index';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)
  ]
};
