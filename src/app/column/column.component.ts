import { Component, Input, OnInit } from '@angular/core';
import {CdkDragDrop,CdkDragEnter, CdkDragExit ,  moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {
  @Input('column') column: Object = "";
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  doing = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];
  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  constructor() { }

  ngOnInit(): void {
    console.log(this.column);
 
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log(event);
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
