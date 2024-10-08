import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapScreenComponent } from './screens/map-screen/map-screen.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { LoadingMapComponent } from './components/loading-map/loading-map.component';
import { BtnMyLocationComponent } from './components/btn-my-location/btn-my-location.component';
import { AngularLogoComponent } from './components/angular-logo/angular-logo.component';

@NgModule({
  declarations: [
    MapScreenComponent,
    MapViewComponent,
    LoadingMapComponent,
    BtnMyLocationComponent,
    AngularLogoComponent
  ],
  imports: [CommonModule],
})
export class MapsModule {}
