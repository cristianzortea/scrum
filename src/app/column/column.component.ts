import { Component, Input, OnInit } from '@angular/core';
import {CdkDragDrop,CdkDragEnter, CdkDragExit ,  moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Column } from '../column';
import { Story } from '../story';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})

export class ColumnComponent implements OnInit {
  @Input() column: Column = {id: 0, name: 'Windstorm',color:'', stories:[]};

  stories = this.column.stories;

  constructor() { }

  ngOnInit(): void {

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

}
