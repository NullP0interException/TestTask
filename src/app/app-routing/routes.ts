import {Routes} from '@angular/router';
import {CatalogComponent} from '../catalog/catalog.component';
import {HomeComponent} from '../home/home.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'catalog', component: CatalogComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];
