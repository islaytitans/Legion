import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'rosters', pathMatch: 'full' },
  { path: 'rosters', loadChildren: './rosters/rosters.module#RostersPageModule' },
  { path: 'units', loadChildren: './units/units.module#UnitsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
