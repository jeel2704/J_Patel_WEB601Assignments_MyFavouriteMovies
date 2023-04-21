import { Component } from '@angular/core';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Content } from '../helper-files/content-interface';
import { ContentService } from '../content.service';
import { AddContentDialogComponent } from '../add-content-dialog/add-content-dialog.component';
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

  constructor(private contentService: ContentService, public dialog: MatDialog) {
  }


    openAddContentDialog(): void {
      const dialogRef = this.dialog.open(this.AddContentDialogComponent, {
        width: '450px',
        data: {title: 'Add ' + this.contentType}
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        console.log(result);
        this.contentService.addContent(result).subscribe(newContent => {
          this.contentList.push(newContent);
          this.messageService.add('Content added successfully');
        });

      });
    }

}
