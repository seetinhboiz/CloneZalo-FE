import { Component } from '@angular/core';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { ContactListComponent } from '../contact-list/contact-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SideMenuComponent, ContactListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
