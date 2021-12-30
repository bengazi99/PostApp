import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './pages/posts/posts.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PostScreenComponent } from './components/post-screen/post-screen.component';
import { PostsScreenComponent } from './components/posts-screen/posts-screen.component';
import { PostComponent } from './pages/post/post.component';
import { PostsService } from './services/post.service';
import { UsersService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PageNotFoundComponent,
    PostScreenComponent,
    PostsScreenComponent,
    PostComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PostsService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
