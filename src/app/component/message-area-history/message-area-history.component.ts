import {
  CdkScrollable,
  CdkVirtualScrollViewport,
  ScrollingModule,
} from '@angular/cdk/scrolling';
import { Component, computed, effect, viewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MessageService } from '../../service/message.service';
import { MessageCardContentComponent } from '../message-card-content/message-card-content.component';

interface Message {
  id: number;
  userId: string;
  avatar: string;
  message: string;
  date: string;
  replyMessages: Message[];
}

@Component({
  selector: 'app-message-area-history',
  standalone: true,
  imports: [
    CdkScrollable,
    MatIconModule,
    MatButtonModule,
    ScrollingModule,
    MatMenuModule,
    MatCardModule,
    MessageCardContentComponent,
  ],
  templateUrl: './message-area-history.component.html',
  styleUrl: './message-area-history.component.css',
})
export class MessageAreaHistoryComponent {
  constructor(private messageService: MessageService) {
    this.messageService.initData();
    effect(() => {
      this.messageService.messagesByChatId();
      setTimeout(() => this.handleScrollToBottom(), 2);
    });
  }

  message = computed(() =>
    this.messageService.messagesByChatId().sort((a, b) => {
      if (a.id && b.id) return a.id - b.id;
      return 0;
    })
  );

  isShowReply: boolean = false;
  isReply: boolean = false;

  scroller = viewChild(CdkVirtualScrollViewport);

  handleScrollToBottom() {
    this.scroller()?.scrollTo({ bottom: 0, behavior: 'instant' });
  }
}
