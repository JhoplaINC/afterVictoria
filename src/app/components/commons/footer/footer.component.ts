import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, AfterViewInit {
  osmData: string = '';

  faYoutube = faYoutube;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faTwitter = faTwitter;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.loadOSMData();
  }

  ngAfterViewInit(): void {
    this.renderMap();
  }

  loadOSMData(): void {
    const osmFilePath = './assets/map/map.osm';
    
    this.http.get(osmFilePath, { responseType: 'text' }).subscribe((data: string) => {
      this.osmData = data;
    });
  }

  renderMap(): void {
    const map = L.map('elmapa', {
      dragging: false,
      scrollWheelZoom: false
    }).setView([-20.27726, -70.10462], 17);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap Jhopla'
    }).addTo(map);

    var myIcon = L.icon({
      iconUrl: 'assets/map/pin-icon.png',
      iconSize: [24, 30],
      iconAnchor: [24, 30],
      popupAnchor: [-3, -76],
      shadowUrl: 'assets/map/pin-icon-shadow.png',
      shadowSize: [24, 30],
      shadowAnchor: [22, 28]
  });

    L.marker([-20.27726, -70.10462], {
      title: 'Dirección domiciliaria',
      icon: myIcon
    }).addTo(map);
  }

}
