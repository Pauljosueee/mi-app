import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Device } from '@capacitor/device';
import { Network } from '@capacitor/network';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  deviceInfo: any = {};
  networkStatus: any = {};
  location: any = {};

  async ngOnInit() {
    try {
      this.deviceInfo = await Device.getInfo();
      this.networkStatus = await Network.getStatus();
      const pos = await Geolocation.getCurrentPosition();
      this.location = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude,
      };
    } catch (error) {
      console.error('Error obteniendo información:', error);
    }
  }
}
