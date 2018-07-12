import { Component, ViewChild } from '@angular/core';
import { GeneralService } from '../../services/general/general.service';

import { } from '@types/googlemaps';

declare const MarkerClusterer;
import 'hammerjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  locations: any;
  mapProp: any;
  markers: any = [];
  infoWindow: any;
  response: any;
  mapStyles: any;

  constructor(public generalService: GeneralService) {
    this.generalService.getLocations().subscribe((data) => {
      this.response = data;
      this.mapProp = {
        center: new google.maps.LatLng(this.response.center.lat, this.response.center.lng), 
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        gestureHandling: 'greedy',
        styles: this.generalService.getMapStyles()
      };

      //
      this.map = new google.maps.Map(this.gmapElement.nativeElement, this.mapProp);

      //
      const centerMarker = new google.maps.Marker({
        position: { lat: this.response.center.lat, lng: this.response.center.lng },
        map: this.map,
        icon: '/assets/marker.png',
        animation: google.maps.Animation.DROP
      });

      //
      this.infoWindow = new google.maps.InfoWindow();

      // 
      let bounds = new google.maps.LatLngBounds();
      this.map.fitBounds(bounds);
      //
      let markers = this.response.locations.map((loc, i) => {
        
        //
        const inMarker = new google.maps.Marker({
          position: { lat: loc.lat, lng: loc.lng },
          map: this.map,
          icon: '/assets/marker.png',
          animation: google.maps.Animation.DROP
        });
        // crear ventanas para cada loc
        inMarker.addListener('click', event => {
          //
          const content = `
            <div>
              <h3>${'Hola Santiago!'}</h4> 
            </div>
          `;

          this.infoWindow.setContent(content);
          this.infoWindow.setPosition({ lat: loc.lat, lng: loc.lng });
          this.infoWindow.setOptions({ pixelOffset: new google.maps.Size(0, -30) });
          const map = this.map;
          this.infoWindow.open(map);

        });

        this.map.addListener('click', (event) => {
          this.infoWindow.close();
        }); 

        bounds.extend(inMarker.getPosition());

        return inMarker;
      }); 
    });
  } 

}
