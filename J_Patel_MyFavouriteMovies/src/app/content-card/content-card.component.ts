import { Component, Input, OnInit } from '@angular/core';
// @ts-ignore
import {content} from "../helper-files/content-interface";
@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {
  @Input() content: any;
  @Input() image: string = '';
  tags: string[] = [];
}
