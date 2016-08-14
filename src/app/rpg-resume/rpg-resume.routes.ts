import { RpgResume } from './rpg-resume.component';
import { Route, RouterModule }   from '@angular/router';

export const RpgRoutes: Route[] = [
  { path: '',      component:  RpgResume },

];

export const RpgRouting = RouterModule.forRoot(RpgRoutes);