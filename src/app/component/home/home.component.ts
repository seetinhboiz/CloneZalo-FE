import { CommonModule } from '@angular/common';
import { Component, effect, viewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { MessageService } from '../../service/message.service';
import { ContactListComponent } from '../contact-list/contact-list.component';
import { MessageAreaComponent } from '../message-area/message-area.component';
import { MessageThreadComponent } from '../message-thread/message-thread.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatButtonModule,
    MatSidenavModule,
    CommonModule,
    ContactListComponent,
    MessageAreaComponent,
    MessageThreadComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private messageService: MessageService) {
    effect(() => {
      if (this.messageService.isOpenThread()) {
        this.getDrawer()?.open();
      } else {
        this.getDrawer()?.close();
      }
    });

    this.messageService.messagesByChatId()
  }

  getDrawer = viewChild(MatDrawer);
}
