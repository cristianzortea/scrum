import {Component, OnInit } from '@angular/core';
import {CdkDragDrop,CdkDragEnter, CdkDragExit ,  moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Column } from '../column';
import { Story } from '../story';
import { BoardService } from '../board.service';

/**
 * @title Drag&Drop connected sorting group
 */
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})

export class BoardComponent implements OnInit {

  keys: number[] = []

  constructor(private boardService: BoardService) {
  }

  ngOnInit(): void {
    this.keys = this.boardService.getkeys();
  }

}