import { Component, signal, viewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgxPanZoomModule, PanZoomComponent, PanZoomModel } from 'ngx-panzoom';
import { ChooseRoomService } from '../service/choose-room.service';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [NgxPanZoomModule, MatButtonModule, MatIconModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css',
})
export class MapComponent {
  constructor(private chooseRoomService: ChooseRoomService) {}

  readonly panZoom = viewChild(PanZoomComponent);
  readonly panzoomModel = signal<PanZoomModel>(undefined!);

  handleChooseRoom(roomName: string) {
    this.chooseRoomService.roomName.update(() => roomName);
  }
}
