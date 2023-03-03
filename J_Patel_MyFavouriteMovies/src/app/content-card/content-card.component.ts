import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {
  @Input() content: any;
  @Input() image: string = '';
}
