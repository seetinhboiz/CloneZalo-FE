import { Component, computed, input } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { IMessage } from '../../interface/message';
import { MessageService } from '../../service/message.service';
import { IUser } from '../../interface/user';

@Component({
  selector: 'app-message-area-input-bar',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  templateUrl: './message-area-input-bar.component.html',
  styleUrl: './message-area-input-bar.component.css',
})
export class MessageAreaInputBarComponent {
  constructor(private messageService: MessageService) {
    this.getUser();
  }

  typeMessage = input<string>();

  idAutoIncre = computed(() => this.messageService.idAuto() + 1);

  newMessage = new FormControl('');

  currentUser: IUser = {};

  userId = 0;

  getUser() {
    this.userId = Number(localStorage.getItem('userId'));
    this.messageService.users().map((user) => {
      if (user.id === this.userId)
        this.currentUser = user
    })
  }

  handleSend(event?: KeyboardEvent) {
    const date = new Date();
    const newMessage: IMessage = {
      id: this.idAutoIncre(),
      content: this.newMessage.value || '',
      date: date.toLocaleDateString(),
      userSend: {
        id: 1,
        username: 'john_doe',
        avatar:
          'https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/05/anh-meme-meo-13.jpg',
        chats: [],
      },
      chatId: 1,
      replyMessage: [],
    };

    if (!event) {
      this.messageService.sendMessage(newMessage, this.typeMessage());
      this.newMessage.setValue('');
    } else if (event?.key === 'Enter') {
      this.messageService.sendMessage(newMessage, this.typeMessage());
      this.newMessage.setValue('');
    }
  }
}
