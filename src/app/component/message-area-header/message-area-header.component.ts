import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-message-area-header',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './message-area-header.component.html',
  styleUrl: './message-area-header.component.css',
})
export class MessageAreaHeaderComponent {}
