import { Column } from './column';
import { Story } from './story';

export const columns: Column[] = [
    {
      id: 1,
      name: 'Backlog',
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
        id: 2, name: 'To Do',  stories : [ {id: 10, name: 'Get to work', description:''}, {id:21, name:'Pick up groceries', description:''},{id:31, name:'Go home', description:''},{id:35, name:'Fall asleep', description:''}]},
    {id: 3, name: 'Doing',  stories : [ {id: 11, name: 'Get to work', description:''}, {id:22, name:'Pick up groceries', description:''},{id:32, name:'Go home', description:''},{id:36, name:'Fall asleep', description:''}]},
    {id: 4, name: 'Done',  stories : [ {id: 12, name: 'Get to work', description:''}, {id:23, name:'Pick up groceries', description:''},{id:33, name:'Go home', description:''},{id:37, name:'Fall asleep', description:''}]}
  ]