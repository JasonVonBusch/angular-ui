import { Component } from '@angular/core';

import { stories } from '../stories';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css']
})
export class StoryListComponent {
  stories = stories;

  details(id: number) {
    window.alert('Details for story id: ' + id);
  }

  share(id: number) {
      window.alert('Sharing story id: ' + id);
  }
}