import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapScreenComponent } from './maps/screens/map-screen/map-screen.component';

const routes: Routes = [
  {
    path: 'maps',
    title: 'Maps',
    component: MapScreenComponent,
  },
  {
    path: '**',
    redirectTo: 'maps',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
