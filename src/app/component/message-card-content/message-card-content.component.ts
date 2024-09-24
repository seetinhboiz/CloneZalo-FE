import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { IMessage } from '../../interface/message';
import { MessageService } from '../../service/message.service';

@Component({
  selector: 'app-message-card-content',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
  ],
  templateUrl: './message-card-content.component.html',
  styleUrl: './message-card-content.component.css',
})
export class MessageCardContentComponent {
  constructor(private messageService: MessageService) {
    this.getUserId();
  }

  userId = 0;

  getUserId() {
    this.userId = Number(localStorage.getItem('userId'));
  }

  handleOpenThread() {
    this.messageService.isOpenThread.update((value) => true);

    const currentMessage = this.message();
    if (currentMessage) {
      this.messageService.messageThread.update(
        (value) => (value = currentMessage)
      );
    }
  }

  message = input<IMessage>();
  isReplyMessage = input<boolean>();
}
