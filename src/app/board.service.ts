import { Injectable } from '@angular/core';
import { Column } from './column';
import { Story } from './story';
import { columns } from './mock-board';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BoardService {
  list: Column[];

  constructor() { 
    this.getColumns().subscribe((response: Column[])=> {
      this.list = response;
    });
  }

  getColumns(): Observable<Column[]> {
    const list = of(columns);
    return list;
  }

  getColumnById(id: number): Column {
    var list = of(columns);
    var column: Column | undefined;
    for(var index in list) {
      if(list[index].id == id){
        column = list[index];
      }
    }
    return column;
  }

}
