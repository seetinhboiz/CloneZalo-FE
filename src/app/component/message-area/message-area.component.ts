import { Component, input } from '@angular/core';
import { MessageAreaHeaderComponent } from '../message-area-header/message-area-header.component';
import { MessageAreaHistoryComponent } from '../message-area-history/message-area-history.component';
import { MessageAreaInputBarComponent } from '../message-area-input-bar/message-area-input-bar.component';

@Component({
  selector: 'app-message-area',
  standalone: true,
  imports: [
    MessageAreaHeaderComponent,
    MessageAreaHistoryComponent,
    MessageAreaInputBarComponent,
  ],
  templateUrl: './message-area.component.html',
  styleUrl: './message-area.component.css',
})
export class MessageAreaComponent {
  typeMessage = 'MESSAGE';
}
