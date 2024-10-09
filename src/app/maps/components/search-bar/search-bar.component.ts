import { Component } from '@angular/core';
import { PlacesService } from '../../services';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent {
  private debounceTimer?: NodeJS.Timeout;
  constructor(private placesService: PlacesService) {}

  onQueryChanged(query: string = '') {
    if (this.debounceTimer) clearInterval(this.debounceTimer);
    this.debounceTimer = setTimeout(() => {
      this.placesService.getPlacesByQuery(query);
    }, 500);
  }
}
