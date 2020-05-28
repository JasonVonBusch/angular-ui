import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StoryDetailsService {
  constructor(private http: HttpClient) { }

  getStoryDetails() {
    this.http.get('');
  }
}
