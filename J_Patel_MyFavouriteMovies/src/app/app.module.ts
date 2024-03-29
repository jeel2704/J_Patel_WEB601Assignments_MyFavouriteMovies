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
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' }, // redirect to the list page
  { path: 'list', component: ContentListComponent },
  { path: 'detail/:id', component: ContentDetailComponent },
  { path: '**', component: PageNotFoundComponent } // handle any invalid urls
];
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
    AddContentDialogComponent,
    ContentDetailComponent,
    PageNotFoundComponent

  ],
    imports: [
        BrowserModule,
      RouterModule.forRoot(routes),
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
