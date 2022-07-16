import { Component, Input, OnInit, Inject } from '@angular/core';
import {CdkDragDrop,CdkDragEnter, CdkDragExit ,  moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Column } from '../column';
import { Story } from '../story';
import { BoardService } from '../board.service';


@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})

export class ColumnComponent implements OnInit {
  @Input() column: Column = {stories:[]};
  keys: number[] = [];

  constructor(private boardService: BoardService) { }

  ngOnInit(): void {
    if (this.column != undefined){
      var list: Column[] = this.column.stories!;
      for(let index of list) {
        this.keys.push(index.id!);
      }
    }
  }
  
  drop(event: CdkDragDrop<number[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}

