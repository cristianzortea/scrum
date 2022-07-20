import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { Column } from '../column';
import { BoardService } from '../board.service';

@Component({
  selector: 'app-columns-list',
  templateUrl: './columns-list.component.html',
  styleUrls: ['./columns-list.component.css']
})

export class ColumnsListComponent implements OnInit {
  list: string[] = [];
  columns: Column[] = [];

  constructor(private boardService: BoardService) { }

  ngOnInit(): void {
    this.columns = this.boardService.getColumns();
    for(let index of this.columns) {
      this.list.push(index.name!);
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log("previousIndex" + event.previousIndex);
    console.log("currentIndex" +  event.currentIndex);
    moveItemInArray(this.list, event.previousIndex, event.currentIndex);
  }
}
