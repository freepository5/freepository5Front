import { bootstrapApplication } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app/app.component';

import { appConfig } from './app/app.config';
import { importProvidersFrom } from '@angular/core';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err)); {
//     providers:[
//       appConfig.providers,
//       HttpClientModule
//     ]
//   } 
bootstrapApplication(AppComponent, {
  providers: [
    ...appConfig.providers,
    importProvidersFrom(HttpClientModule)
  ]
});
