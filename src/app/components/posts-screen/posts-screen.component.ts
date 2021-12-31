import { Component, OnInit } from '@angular/core';
import { PostModel } from 'src/app/models/post.model';
import { UserModel } from 'src/app/models/user.model';
import { PostsService } from 'src/app/services/post.service';
import { UsersService } from 'src/app/services/user.service';

@Component({
  selector: 'app-posts-screen',
  templateUrl: './posts-screen.component.html',
  styleUrls: ['./posts-screen.component.css'],
})
export class PostsScreenComponent implements OnInit {
  posts!: PostModel[];
  users!: UserModel[];
  searchText: any;
  searchFilter: any;
  staticPost!: PostModel[];
  staticUsers!: any[];
  mergedData!: any[];
  staticData!: any[];

  constructor(
    private postsService: PostsService,
    private usersService: UsersService
  ) {
    this.getPosts();
  }

  getPosts() {
    this.usersService.getUsers().subscribe((users) => {
      this.users = users;
      this.staticUsers = users;
      console.log(this.users);
      if(this.users){
        this.postsService.getPosts().subscribe((posts) => {
          this.posts = posts;
          this.staticPost = posts;
          console.log(this.posts);
          if(this.posts){
            let mergedSubjects = this.posts.map(subject => {
              let otherSubject = this.users.find(element => element.id === subject.userId)
              return { ...otherSubject, ...subject }
          })
          this.mergedData = mergedSubjects
          this.staticData = mergedSubjects
          console.log(this.mergedData);
          }
        });
      }
    });
  }

  searchName() {
    console.log(this.searchText);
    let searchVal = this.searchText.toLowerCase();
    let colsAmt = 10;
    let keys = Object.keys(this.staticUsers[0]);
    this.mergedData = this.staticData.filter(function (item) {
      for (let i = 0; i < colsAmt; i++) {
        if (
          (item[keys[i]] != null &&
            item[keys[i]].toString().toLowerCase().indexOf(searchVal) !== -1) ||
          !searchVal
        ) {
          return true;
        }
      }
    });
  }


  ngOnInit() {}
}
