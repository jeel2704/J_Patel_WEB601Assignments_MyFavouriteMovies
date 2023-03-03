
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit{
  content = [    {
    id: 1,
    title: 'First Content',
    description: 'This is the first content',
    image: 'https://example.com/image1.jpg',
    type: 'first',
    tags: ['tag1', 'tag2', 'tag3'],
    creator: 'Stan lee'
  },
    {
      id: 2,
      title: 'Second Content',
      description: 'This is the second content',
      image: 'https://example.com/image2.jpg',
      type: 'second',
      tags: ['tag4', 'tag5', 'tag6'],
      creator: 'James Cameron'
    },
    {
      id: 3,
      title: 'Third Content',
      description: 'This is the third content',
      image: 'https://example.com/image3.jpg',
      type: 'Third',
      tags: ['tag7', 'tag8', 'tag9'],
      creator: 'John Smith',
    },
    {
      id: 4,
      title: 'Forth Content',
      description: 'This is the Forth content',
      image: 'https://example.com/image1.jpg',
      type: 'Forth',
      tags: ['tag1', 'tag2', 'tag3'],
      creator: 'Stan lee'
    },
    {
      id: 5,
      title: 'Fifth Content',
      description: 'This is the Fifth content',
      image: 'https://example.com/image1.jpg',
      type: 'Fifth',
      tags: ['tag1', 'tag2', 'tag3'],
      creator: 'Stan lee'
    },
    {
      id: 6,
      title: 'sixth Content',
      description: 'This is the sixth content',
      image: 'https://example.com/image1.jpg',
      type: 'sixth',
      tags: ['tag1', 'tag2', 'tag3'],
      creator: 'Stan lee'
    },
  ];
  showIdAndTitle(id: number, title: string) {
    console.log(`Content id: ${id}, title: ${title}`);
  }

  constructor() { }

  ngOnInit() {
  }
}
