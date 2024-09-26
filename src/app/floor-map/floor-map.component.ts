import { Component } from '@angular/core';
import { MapComponent } from '../map/map.component';
import { RoomDetailComponent } from '../room-detail/room-detail.component';

@Component({
  selector: 'app-floor-map',
  standalone: true,
  imports: [MapComponent, RoomDetailComponent],
  templateUrl: './floor-map.component.html',
  styleUrl: './floor-map.component.css',
})
export class FloorMapComponent {}
