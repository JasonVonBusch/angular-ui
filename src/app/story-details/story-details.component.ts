import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { stories } from '../stories';

@Component({
  selector: 'app-story-details',
  templateUrl: './story-details.component.html',
  styleUrls: ['./story-details.component.css']
})
export class StoryDetailsComponent implements OnInit {
  story: { id: number; description: string; };
  fullName = '';

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.story = stories[+params.get('storyId')];
    });
  }

  storylist() {
    this.router.navigateByUrl('/storylist');
  }

  nameChanged(name: string) {
    this.fullName = name;
  }

  updateName() {
    this.fullName = 'George';
  }
}
