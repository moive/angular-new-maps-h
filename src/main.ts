import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import Mapboxgl from 'mapbox-gl';

Mapboxgl.accessToken =
  'pk.eyJ1IjoibW9pdmUiLCJhIjoiY2xwdzRjc2dsMDlnazJqcW96a25ua3hmZCJ9.S1vZRXL4HperNuqbChZQ4w';

if (!navigator.geolocation) {
  alert('Browser does not support geolocation 😥');
  throw new Error('Browser does not support geolocation 🙈');
}

platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true
})
  .catch(err => console.error(err));
