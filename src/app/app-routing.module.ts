import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   {
    path: '',
    redirectTo: 'places',
    pathMatch: 'full'
  },
  {
    path: 'places',
    children:[
      {
        path:"",
        loadChildren: () => import('./places/places.module').then( m => m.PlacesPageModule)
      },
      {
        path:":placeId",
        loadChildren: () => import('./places/detail-places/detail-places.module').then( m => m.DetailPlacesPageModule)
      }
    ]
  },
  {
    path: 'new-place',
    loadChildren: () => import('./places/add-place/add-place.module').then( m => m.AddPlacePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
