import { Component, OnInit, Input } from '@angular/core';
import { Column } from '../column';
import { Story } from '../story';
import { BoardService } from '../board.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  @Input() story_id: number | undefined;
  
  story: Story ={};
  
  constructor(private boardService: BoardService) {
  }

  ngOnInit(): void {
    this.story = this.boardService.getStoryById(this.story_id!);
  }



}
