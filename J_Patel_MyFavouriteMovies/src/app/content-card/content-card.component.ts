import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentList } from '../helper-files/content-list';
@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {
  contentList: ContentList;

  constructor(){
    this.contentList = new ContentList();

    this.contentList.add({id: 1,
      title: 'Avengers:Endgame',
      description: 'favourite movie',
      creator: 'marvel',
      imgURL: 'https://vignette.wikia.nocookie.net/iron-man-2/images/3/3f/81%2BNup8-8NL._SL1500_.jpg/revision/latest?cb=20191217215013',
      type: 'Action'
    })

    this.contentList.add({id: 2,
      title: 'Avatar',
      description: 'highest collection',
      creator: 'James Cameron',
      imgURL: 'https://www.cinemascomics.com/wp-content/uploads/2020/06/avatar-2-rodaje-imagenes.jpg',
      type: 'Action'
    })

    this.contentList.add({id: 3,
      title: 'Iron man 3',
      description: 'very popular movie',
      creator: 'marvel',
      imgURL: 'https://th.bing.com/th/id/R.30660b68d75fe927c1d8e577873aab72?rik=Cr4ryoGOnf3Sqw&riu=http%3a%2f%2fwww.newdvdreleasedates.com%2fimages%2fposters%2flarge%2firon-man-3-2013-02.jpg&ehk=oMT%2bagml1K41HzBKsOZuVki47gtMXlNg9UVAWqQbOmM%3d&risl=&pid=ImgRaw&r=0',
      type: 'Action'
    })
  }

}

