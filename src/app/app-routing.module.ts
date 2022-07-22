import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BoardComponent } from './board/board.component';
import { StoryDetailComponent } from './story-detail/story-detail.component';
import { ColumnsListComponent } from './columns-list/columns-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/board', pathMatch: 'full' },
  { path: 'board', component: BoardComponent },
  { path: 'columns', component: ColumnsListComponent },
  { path: 'story/:id', component: StoryDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
