import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { HeaderComponent } from './components/UI/header/header.component';
import { PostListComponent } from './components/posts/post-list/post-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';






@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainPageComponent,
    HeaderComponent,
    PostListComponent,
    BrowserAnimationsModule

  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
