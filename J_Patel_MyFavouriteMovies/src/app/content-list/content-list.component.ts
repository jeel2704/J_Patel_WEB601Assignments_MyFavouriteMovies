import { Component } from '@angular/core';
// @ts-ignore
import {Content} from '../helper-files/content-interface';
import { CONTENT } from '../helper-files/contentDb';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss'],

})
export class ContentListComponent {
  searchTitle: string | undefined;
  searchResult: { message: string; color: string; } | undefined;

  title: string = '';
  errTxt: boolean = false;
  contents: Content[] = [];
  filterContent: any;
  type: string | undefined;



  showIdAndTitle(id: number, title: string) {
    console.log(`Content id: ${id}, title: ${title}`);
  }

  constructor() { }

  ngOnInit(): void {
    this.contents = CONTENT;
  }
  searchByTitle() {
    const content = this.contents.find((c) => c.title === this.searchTitle);
    if (content) {
      this.searchResult = { message: `Content with title "${this.searchTitle}" exists.`, color: 'green' };
    } else {
      this.searchResult = { message: `Content with title "${this.searchTitle}" doesn't exist.`, color: 'red'};
    }
  }





}
