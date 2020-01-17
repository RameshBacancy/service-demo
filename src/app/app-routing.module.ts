import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostEditComponent } from './post-edit/post-edit.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-post' },
  { path: 'create-post', component: PostCreateComponent },
  { path: 'post-list', component: PostListComponent },
  { path: 'post-edit/:id', component: PostEditComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }