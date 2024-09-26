import { Component, input } from '@angular/core';

@Component({
  selector: 'app-info-item',
  standalone: true,
  imports: [],
  templateUrl: './info-item.component.html',
  styleUrl: './info-item.component.css',
})
export class InfoItemComponent {
  infoTitle = input<string>();
  infoItem = input<string>();
}
