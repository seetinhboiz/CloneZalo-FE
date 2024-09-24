import { Component, computed, effect } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { MessageService } from '../../service/message.service';
import { MessageAreaInputBarComponent } from '../message-area-input-bar/message-area-input-bar.component';
import { MessageCardContentComponent } from '../message-card-content/message-card-content.component';
import { MessageThreadMainMessageComponent } from '../message-thread-main-message/message-thread-main-message.component';

@Component({
  selector: 'app-message-thread',
  standalone: true,
  imports: [
    MatDivider,
    MatButtonModule,
    MatIcon,
    MessageThreadMainMessageComponent,
    MessageCardContentComponent,
    MessageAreaInputBarComponent,
  ],
  templateUrl: './message-thread.component.html',
  styleUrl: './message-thread.component.css',
})
export class MessageThreadComponent {
  constructor(private messageService: MessageService) {
    effect(() => {
      this.messageService.messageThread();
      this.messageService.messageThread();
    });
  }

  typeMessage = 'REPLYMESSAGE';

  messageThread = computed(() => this.messageService.messageThread());

  handleCloseThread() {
    this.messageService.isOpenThread.update((value) => false);
  }
}
