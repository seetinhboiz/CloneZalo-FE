import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ContactListItemComponent } from '../contact-list-item/contact-list-item.component';
import { chats } from '../../interface/static';
import { IChat } from '../../interface/chat';

interface User {
  avatarUrl: string;
  name: string;
  lastMessage: string;
}

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ContactListItemComponent,
  ],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css',
})
export class ContactListComponent {
  listChat: IChat[] = chats;
}
