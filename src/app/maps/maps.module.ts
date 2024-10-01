import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapScreenComponent } from './screens/map-screen/map-screen.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { LoadingMapComponent } from './components/loading-map/loading-map.component';

@NgModule({
  declarations: [
    MapScreenComponent,
    MapViewComponent,
    LoadingMapComponent
  ],
  imports: [CommonModule],
})
export class MapsModule {}
