import { Component } from '@angular/core';
import { Component, EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentService } from '../content.service';
@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent {
  newContent: Content = {
  title: '',
  description: '',
  imgURL: '',
  type: '',
  tags: '',
  creator: '',
};
  @Output() contentAdded = new EventEmitter<Content>();

  constructor(private contentService: ContentService) { }

  addNewContent(): void {
    this.contentService.addContent(this.newContent).subscribe(content => {
      this.contentAdded.emit(content);
      this.newContent = {
        title: '',
        description: '',
        creator:'',
        imgUrl: '',
        type:'',
        tags:'',

      };
    });
  }

}
