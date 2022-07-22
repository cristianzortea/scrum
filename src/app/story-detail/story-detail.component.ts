import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Story } from '../story';
import { BoardService } from '../board.service';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';


@Component({
  selector: 'app-story-detail',
  templateUrl: './story-detail.component.html',
  styleUrls: ['./story-detail.component.css']
})

export class StoryDetailComponent implements OnInit {
  story: Story ={};
  
  constructor(
    private route: ActivatedRoute,
    private boardService: BoardService,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    console.log("Id: "+ id);
    this.story = this.boardService.getStoryById(id);
    console.log("story: "+ this.story);
  }

  goBack(): void {
    this.location.back();
  }
  save(): void {
    if (this.story) {
      this.boardService.updateStory(this.story);
    }
    this.goBack();
  }
}
