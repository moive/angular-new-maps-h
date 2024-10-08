import { Component } from '@angular/core';
import { MapService, PlacesService } from '../../services';

@Component({
  selector: 'app-btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styleUrl: './btn-my-location.component.scss',
})
export class BtnMyLocationComponent {
  constructor(
    private placeService: PlacesService,
    private mapService: MapService
  ) {}

  goToMyLocation() {
    if (!this.placeService.isUserLocationReady)
      throw new Error('Did not find user location');
    if (!this.mapService.isMapReady) throw new Error('Map is not ready');

    this.mapService.flyTo(this.placeService.userLocation!);
  }
}
