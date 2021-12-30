import { Component, OnInit } from '@angular/core';
import { PostModel } from 'src/app/models/post.model';
import { UserModel } from 'src/app/models/user.model';
import { PostsService } from 'src/app/services/post.service';
import { UsersService } from 'src/app/services/user.service';


@Component({
  selector: 'app-posts-screen',
  templateUrl: './posts-screen.component.html',
  styleUrls: ['./posts-screen.component.css']
})
export class PostsScreenComponent implements OnInit {
  posts!: PostModel[];
  users!: UserModel[];
  searchText: any;
  searchFilter: any;
  staticPost!: any[];

  constructor(
    private postsService: PostsService,
    private usersService: UsersService
  ) {
    this.getPosts()
  }

  getPosts() {
    this.postsService.getPosts()
      .subscribe(posts => { this.posts = posts; this.staticPost = posts; this.setUserName() })
    this.usersService.getUsers()
      .subscribe(users => { this.users = users; this.setUserName() })
    console.log(this.posts)
  }

  searchName() {
    console.log(this.searchText)
    let searchVal = this.searchText.toLowerCase();
    let colsAmt = 10; let keys = Object.keys(this.staticPost[0]);
    this.posts = this.staticPost.filter(function(item) { for (let i = 0; i < colsAmt; i++) { if (item[keys[i]] != null && item[keys[i]].toString().toLowerCase().indexOf(searchVal) !== -1 || !searchVal) { return true; } } });
  }

  setUserName() {
    if (this.posts && this.users) {
      for (const post of this.posts) {
        for (const user of this.users) {
          if (post.userId === user.id) {
            post.name = user.name
          }
        }
      }
    }
  }

  ngOnInit() { }

}