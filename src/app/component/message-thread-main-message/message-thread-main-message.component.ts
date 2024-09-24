import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { MessageAreaInputBarComponent } from '../message-area-input-bar/message-area-input-bar.component';
import { MessageCardContentComponent } from '../message-card-content/message-card-content.component';
import { IMessage } from '../../interface/message';

@Component({
  selector: 'app-message-thread-main-message',
  standalone: true,
  imports: [
    MatDividerModule,
    MatCardModule,
    MatIcon,
    MatButtonModule,
    MessageCardContentComponent,
    MessageAreaInputBarComponent,
  ],
  templateUrl: './message-thread-main-message.component.html',
  styleUrl: './message-thread-main-message.component.css',
})
export class MessageThreadMainMessageComponent {
  messageThead = input<IMessage>();
}
