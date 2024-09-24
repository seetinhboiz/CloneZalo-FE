import { Component, input } from '@angular/core';
import { IChat } from '../../interface/chat';

@Component({
  selector: 'app-contact-list-item',
  standalone: true,
  imports: [],
  templateUrl: './contact-list-item.component.html',
  styleUrl: './contact-list-item.component.css',
})
export class ContactListItemComponent {
  chat = input<IChat>();
}
