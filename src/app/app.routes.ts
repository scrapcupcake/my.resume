import { WebpackAsyncRoute } from '@angularclass/webpack-toolkit';
import { RouterConfig } from '@angular/router';
import { RpgResume, CannaRpgResume } from './rpg-resume';

export const routes: RouterConfig = [
  { path: '',      component:  RpgResume },
  { path: 'canna', component: CannaRpgResume }
];