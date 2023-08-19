import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth/auth.component';
import { PostListComponent } from './components/posts/post-list/post-list.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { authGuardGuard } from './components/auth/auth.guard';
import { PostDetailComponent } from './components/posts/post-detail/post-detail.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'auth', component: AuthComponent},
  { path: 'posts', component: PostListComponent, canActivate: [authGuardGuard] },
  { path: 'posts/:id', component: PostDetailComponent, canActivate: [authGuardGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
