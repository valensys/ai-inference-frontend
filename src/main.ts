import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { MainButtonsComponent } from './app/main-page/main-buttons.component';

bootstrapApplication(MainButtonsComponent, appConfig)
  .catch((err) => console.error(err));
