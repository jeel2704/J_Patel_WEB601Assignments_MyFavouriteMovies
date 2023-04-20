import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Content } from './content';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private serverUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getAllContent(): Observable<Content[]> {
    const url = `${this.serverUrl}/content`;
    return this.http.get<Content[]>(url);
  }

  addContent(newContent: Content): Observable<Content> {
    const url = `${this.serverUrl}/content`;
    return this.http.post<Content>(url, newContent);
  }
}
