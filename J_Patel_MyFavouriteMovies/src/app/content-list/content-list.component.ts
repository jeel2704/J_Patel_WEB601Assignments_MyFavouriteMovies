import { Component } from '@angular/core';
// @ts-ignore
import {Content} from '../helper-files/content-interface';

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
  contents: Content[] = [
    {
    id: 1,
    title: 'John-Wick-2',
    description: 'This is the first content',
    imgURL: 'https://lwlies.com/wp-content/uploads/2017/11/John-Wick-2-900x0-c-default.jpg',
    type: 'action',
    tags: ['tag1', 'tag2', 'tag3'],
    creator: 'Stan lee'
  },
    {
      id: 2,
      title: 'Avengers',
      description: 'This is the second content',
      imgURL: 'https://image.tmdb.org/t/p/original/n3G6dLQPDDdKvUKWMlCI7LRH9TQ.jpg',
      type: 'comedy',
      tags: ['tag4', 'tag5', 'tag6'],
      creator: 'James Cameron'
    },
    {
      id: 3,
      title: 'Spider Man',
      description: 'This is the third content',
      imgURL: 'https://image.tmdb.org/t/p/original/wZGlaMxBAjCIYLzyDWvocaoNooZ.jpg',
      type: 'action',
      tags: ['tag7', 'tag8', 'tag9'],
      creator: 'John Smith',
    },
    {
      id: 4,
      title: 'Iron man 3',
      description: 'This is the Forth content',
      type: 'action',
      tags: ['tag1', 'tag2', 'tag3'],
      creator: 'Stan lee'
    },
    {
      id: 5,
      title: 'Joker',
      description: 'This is the Fifth content',
      imgURL: 'https://posterspy.com/wp-content/uploads/2020/01/JoelJensen_Joker1.jpg',
      type: 'comedy',
      tags: ['tag1', 'tag2', 'tag3'],
      creator: 'Stan lee'
    },
    {
      id: 6,
      title: 'Avatar',
      description: 'This is the sixth content',
      imgURL: 'https://image.tmdb.org/t/p/original/8Y7WrRK1iQHEX7UIftBeBMjPjWD.jpg',
      type: 'action',
      tags: ['tag1', 'tag2', 'tag3'],
      creator: 'Stan lee'
    },
    {
      id: 7,
      title: 'RRR',
      description: 'This is the seventh content',
      imgURL: 'https://i.postimg.cc/Dmkhq1H1/RRR-2019-Hindi-Dubbed-Full-Movie.jpg',
      tags: ['tag1', 'tag2', 'tag3'],
      creator: 'Stan lee'
    },
  ];
  filterContent: any;
  type: string | undefined;



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
