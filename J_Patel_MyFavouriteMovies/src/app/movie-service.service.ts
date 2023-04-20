import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Content } from './helper-files/content-interface';
import { CONTENT } from './helper-files/contentDb';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class ContentService {
  constructor(private messageService: MessageService) {}

  getContentArray(): Observable<content[]> {
    this.messageService.addMessage('Content array loaded!');
    return of(CONTENT);
  }

  getContentItem(id: number): Observable<Content> {
    const contentItem = this.content.find(item => item.id === id);
    this.messageService.sendMessage(`Content Item at id: ${id}`);
    return of(contentItem);
  }

}
