import {Component, OnInit } from '@angular/core';
import {CdkDragDrop,CdkDragEnter, CdkDragExit ,  moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
/**
 * @title Drag&Drop connected sorting group
 */
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})

export class BoardComponent implements OnInit {

  columns = [
    {
      "id": "1",
      "name": "Backlog",
      "stories": ['Get up', 'Pick up groceries']
    },
    {
      "id": "2",
      "name": "To Do"
    },
    {
      "id": "3",
      "name": "Doing"
    },
    {
      "id": "4",
      "name": "Done"
    }
  ]
  
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  doing = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];
  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  constructor() {
  }

  ngOnInit(): void {
  }
  entered(event: CdkDragEnter<string[]>) {
    console.log('Entered', event.item.data);
   }
   
   exited(event: CdkDragExit<string[]>) {
     console.log('Exited', event.item.data);
   }

}