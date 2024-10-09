import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feature, PlacesResponse } from '../interfaces/places.interface';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  public userLocation?: [number, number];

  public isLoadingPlaces: boolean = false;
  public places: Feature[] = [];

  get isUserLocationReady(): boolean {
    return !!this.userLocation;
  }
  constructor(private http: HttpClient) {
    this.getUserLocation();
  }

  async getUserLocation(): Promise<[number, number]> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          this.userLocation = [coords.longitude, coords.latitude];
          resolve(this.userLocation);
        },
        (err) => {
          alert("Couldn't get geolocation location");
          console.log(err);
          reject();
        }
      );
    });
  }

  getPlacesByQuery(query: string = '') {
    this.isLoadingPlaces = true;
    // TODO: when query is empty
    this.http
      .get<PlacesResponse>(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?country=pe&proximity=-77.13325636389752%2C-11.827702675885476&language=es&access_token=pk.eyJ1IjoibW9pdmUiLCJhIjoiY2xwdzRjc2dsMDlnazJqcW96a25ua3hmZCJ9.S1vZRXL4HperNuqbChZQ4w`
      )
      .subscribe((res) => {
        console.log(res.features);
        this.isLoadingPlaces = false;
        this.places = res.features;
      });
  }
}
