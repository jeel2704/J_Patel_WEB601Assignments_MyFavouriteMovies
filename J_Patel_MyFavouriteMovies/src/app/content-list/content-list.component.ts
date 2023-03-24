import { Component } from '@angular/core';
// @ts-ignore
import {Content} from '../helper-files/content-interface';
@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  searchTitle: string | undefined;
  searchResult: { message: string; color: string; } | undefined;


  contents: Content[] = [    {
    id: 1,
    title: 'First Content',
    description: 'This is the first content',
    imgURL: 'https://example.com/image1.jpg',
    type: 'action',
    tags: ['tag1', 'tag2', 'tag3'],
    creator: 'Stan lee'
  },
    {
      id: 2,
      title: 'Second Content',
      description: 'This is the second content',
      imgURL: 'https://example.com/image2.jpg',
      type: 'comedy',
      tags: ['tag4', 'tag5', 'tag6'],
      creator: 'James Cameron'
    },
    {
      id: 3,
      title: 'Third Content',
      description: 'This is the third content',
      imgURL: 'https://example.com/image3.jpg',
      type: 'action',
      tags: ['tag7', 'tag8', 'tag9'],
      creator: 'John Smith',
    },
    {
      id: 4,
      title: 'Forth Content',
      description: 'This is the Forth content',
      type: 'action',
      tags: ['tag1', 'tag2', 'tag3'],
      creator: 'Stan lee'
    },
    {
      id: 5,
      title: 'Fifth Content',
      description: 'This is the Fifth content',
      imgURL: 'https://example.com/image1.jpg',
      type: 'comedy',
      tags: ['tag1', 'tag2', 'tag3'],
      creator: 'Stan lee'
    },
    {
      id: 6,
      title: 'sixth Content',
      description: 'This is the sixth content',
      imgURL: 'https://example.com/image1.jpg',
      type: 'action',
      tags: ['tag1', 'tag2', 'tag3'],
      creator: 'Stan lee'
    },
    {
      id: 7,
      title: 'seventh Content',
      description: 'This is the seventh content',
      imgURL: 'https://example.com/image1.jpg',
      tags: ['tag1', 'tag2', 'tag3'],
      creator: 'Stan lee'
    },
  ];
  showIdAndTitle(id: number, title: string) {
    console.log(`Content id: ${id}, title: ${title}`);
  }

  constructor() { }

  ngOnInit(): void {}

  searchByTitle() {
    const content = this.contents.find((c) => c.title === this.searchTitle);
    if (content) {
      this.searchResult = { message: `Content with title "${this.searchTitle}" exists.`, color: 'green' };
    } else {
      this.searchResult = { message: `Content with title "${this.searchTitle}" doesn't exist.`, color: 'red'};
    }
  }

}
