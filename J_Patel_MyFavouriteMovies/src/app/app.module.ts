import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { FilterContentPipe } from './filter-content.pipe';
import {FormsModule} from "@angular/forms";
import { HoverAffectDirective } from './content-card/Hover-Affectdirective';
import { AppMessagesComponent } from './app-messages/app-messages.component';
import { MessagesComponent } from './messages/messages.component';
import { ModifyContentComponent } from './modify-content/modify-content.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AddContentDialogComponent } from './add-content-dialog/add-content-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentListComponent,
    FilterContentPipe,
    AppMessagesComponent,
    MessagesComponent,
    HoverAffectDirective,
    ModifyContentComponent,
    AddContentDialogComponent

  ],
    imports: [
        BrowserModule,
      MatButtonModule,
      MatInputModule,

    ],
  providers: [],
  exports: [
    ContentCardComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
