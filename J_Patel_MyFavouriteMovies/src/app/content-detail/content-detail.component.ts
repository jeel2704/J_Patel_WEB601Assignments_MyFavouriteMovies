import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Content } from '../content';
import { ContentService } from '../content.service';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {
  content: Content;

  constructor(
    private route: ActivatedRoute,
    private contentService: ContentService,
  private location: Location,
  private messageService: MessageService
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.contentService.getContent(id).subscribe(
      (data: Content) => {
        this.content = data;
        this.messageService.add(`Content retrieved: id=${this.content.id}, title=${this.content.title}`);
      },
      error => {
        console.error(error);
      }
    );
  }

  getContent(): void {
    this.location.back();
  }
}
