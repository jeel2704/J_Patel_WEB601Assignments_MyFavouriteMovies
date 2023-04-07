import { Component, Input, OnInit } from '@angular/core';
// @ts-ignore
import {Content} from "../helper-files/content-interface";
@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {
  @Input() content: Content | undefined;
  displayContentInfo(): void {
    console.log('Content info displayed');
  }

  get typeClass() {
    // @ts-ignore
    return `content-type-${this.content.type ||'none'}`;
  }
}
