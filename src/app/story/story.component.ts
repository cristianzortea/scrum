import { Component, OnInit, Input, ViewChild, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Story } from '../story';
import { BoardService } from '../board.service';
import { MatMenuTrigger } from '@angular/material/menu';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';




@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})

export class StoryComponent implements OnInit {
  @ViewChild('menuTrigger')
  menuTrigger!: MatMenuTrigger;

  @Input() 
  story_id: number | undefined;
  @Input()
  story: Story ={};

  
  constructor(private boardService: BoardService, public dialog: MatDialog) {
  }

  openDialog(): void {
    const storyDetailDialog = this.dialog.open(StoryDetailDialog, {
      width: '250px',
      data: this.story,
    });

    storyDetailDialog.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.story = result;
    });
  }

  ngOnInit(): void {
    this.story = this.boardService.getStoryById(this.story_id!);
  }
}

@Component({
  selector: 'story-detail-dialog',
  templateUrl: 'story-detail-dialog.html',
  styleUrls: ['story-dialog.css']
})

export class StoryDetailDialog {
  @Input() story: Story = {name:"ttt"};

  constructor(
    public dialogRef: MatDialogRef<StoryDetailDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Story,
  ) {

  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}