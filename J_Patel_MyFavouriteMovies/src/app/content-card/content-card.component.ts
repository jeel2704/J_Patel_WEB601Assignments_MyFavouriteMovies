import { Component, Input, OnInit } from '@angular/core';
// @ts-ignore
import {content} from "../helper-files/content-interface";
@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  // @ts-ignore
  @Input() content: Content;
  // @ts-ignore
  @Input() index: number;
  contentArray: any;

  constructor() { }

  ngOnInit(): void {
  }

  onImageClick() {
    console.log(`Content ID: ${this.content.id} Title: ${this.content.title}`);
  }
}
