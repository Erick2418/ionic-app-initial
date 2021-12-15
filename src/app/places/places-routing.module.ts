import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacesPage } from './places.page';

const routes: Routes = [
  {
    path: '',
    component: PlacesPage
  },
  {
    path: 'detail-places',
    loadChildren: () => import('./detail-places/detail-places.module').then( m => m.DetailPlacesPageModule)
  },
  {
    path: 'add-place',
    loadChildren: () => import('./add-place/add-place.module').then( m => m.AddPlacePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacesPageRoutingModule {}
