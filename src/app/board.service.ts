import { keyframes } from '@angular/animations';
import { Injectable } from '@angular/core';
import { Column } from './column';
import { Story } from './story';


@Injectable({
  providedIn: 'root'
})

export class BoardService {

  columns: Column[] = [
    {
      id: 1,
      name: 'Backlog',
      position:0,
      stories : [ {
        id: 1, 
        name: 'Get to work', 
        description:'jhfuehfue hfheuhfuefhue ehfuehfue'
      }, {
        id:20, 
        name:'Pick up groceries', 
        description:'jjiejjujfjjfj f edjfhiushfuishuif'
      },{
        id:30, 
        name:'Go home', 
        description:'yyyriew wiwjuioiwmmjew fjj h '
      },{
        id:34, 
        name:'Fall asleep', 
        description:' sjdff  fsfkskfksf  dfd fd  fkkkepwor[owl;olkk  j'
      }]},
    {
      id: 2222, name: 'To Do', position:1, stories : [ {id: 10, name: 'Get to work', description:''}, {id:21, name:'Pick up groceries', description:''},{id:31, name:'Go home', description:''},{id:35, name:'Fall asleep', description:''}]},
    {id: 3333, name: 'Doing', position:2, stories : [ {id: 11, name: 'Get to work', description:''}, {id:22, name:'Pick up groceries', description:''},{id:32, name:'Go home', description:''},{id:36, name:'Fall asleep', description:''}]},
    {id: 4444, name: 'Done', position:3, stories : [ {id: 12, name: 'Get to work', description:''}, {id:23, name:'Pick up groceries', description:''},{id:33, name:'Go home', description:''},{id:37, name:'Fall asleep', description:''}]}
  ];

  constructor() { 

  }

  getColumns(): Column[] {
    return this.columns;
  }

  getColumnById(id: number): Column {
    let item : Column = {};
    this.columns.forEach(function (value) {
      if (id == value.id){
        item = value;
      }
    }); 
    return item;
  }

  getStoryById(id: number): Column {
    let story : Story = {};
    this.columns.forEach(function (column) {
      column.stories?.forEach(function (item) {
        if (id == item.id){
          story = item;
        }
      }); 
    }); 
    return story;
  }

  getkeys(): number[] {
    let keys: number[] = [];
    for(let index of this.columns) {
      keys.push(this.columns[1].id!);
    }
    return keys;
  }

}
