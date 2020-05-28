import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StoryListService {
  constructor(private http: HttpClient) { }

  getStories() {
    return this.http.get('localhost:5000/getallstories');
  }
}
