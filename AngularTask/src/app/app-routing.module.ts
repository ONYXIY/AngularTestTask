import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AuthComponent } from './components/auth/auth/auth.component';
import { PostListComponent } from './components/posts/post-list/post-list.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'posts', component: PostListComponent},
  {path: 'posts/:id', component: PostListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
