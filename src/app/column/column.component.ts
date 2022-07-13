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
  @Input() key: number | undefined;
  column: Column = {id:0, name:'', stories:[]};
  stories: Story[] | undefined;
  columns: Column[] = [];

  constructor(private boardService: BoardService) { }

  ngOnInit(): void {
    this.getColumns();
  }
  
  drop(event: CdkDragDrop<Story[]>) {
    console.log(event);
    if (event.previousContainer === event.container) {
      console.log("equals");
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log("not equals");
      console.log(event.previousContainer.data.toString);
      console.log(event.previousContainer.data);
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
        );
      }
    }
    getColumns(): void {
      this.boardService.getColumns().subscribe((list: Column[])=> {
        this.columns = list;
      });
    }


}

