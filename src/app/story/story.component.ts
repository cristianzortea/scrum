import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Story } from '../story';
import { BoardService } from '../board.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})

export class StoryComponent implements OnInit {


  @Input() 
  story_id: number | undefined;
  @Input()
  story: Story ={};

  
  constructor(private boardService: BoardService) {
  }

  ngOnInit(): void {
    this.story = this.boardService.getStoryById(this.story_id!);
  }
}