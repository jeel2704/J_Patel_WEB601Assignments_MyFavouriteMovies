import { Component, OnInit } from '@angular/core';
// @ts-ignore
import {Content} from '../helper-files/content-interface';
import { CONTENT } from '../helper-files/contentDb';
import { MovieService } from '../movie-service.service';
import { ContentService } from '../content.service';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss'],

})
export class ContentListComponent  implements OnInit {
  contents: Content[] = [];
  searchTitle: string | undefined;
  searchResult: { message: string; color: string; } | undefined;

  title: string = '';
  errTxt: boolean = false;

  filterContent: any;
  type: string | undefined;



  showIdAndTitle(id: number, title: string) {
    console.log(`Content id: ${id}, title: ${title}`);
  }

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.contentService.getAllContent().subscribe(
      (data: Content[]) => {
        this.contents = data;
      },
        error => {
          console.error(error);
    });
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
