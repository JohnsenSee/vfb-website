import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Abteilung } from './abteilung/abteilung';

export const routes: Routes = [
      {path: '', component: Home},
      {path: 'abteilung/:departmentid', component: Abteilung}
];
