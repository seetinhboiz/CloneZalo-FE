import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChooseRoomService {
  constructor() {}

  roomName = signal<string>('');
}
