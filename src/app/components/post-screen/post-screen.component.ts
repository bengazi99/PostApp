import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/post.service';
import { UsersService } from 'src/app/services/user.service';

@Component({
  selector: 'app-post-screen',
  templateUrl: './post-screen.component.html',
  styleUrls: ['./post-screen.component.css']
})
export class PostScreenComponent implements OnInit {

  constructor(
    private postsService: PostsService,
    private usersService: UsersService,
    private route: ActivatedRoute
  ) { }

  post!: any;
  id = this.route.snapshot.paramMap.get('id');

  ngOnInit(): void {
    this.getPost()
  }


  getPost() {
    this.postsService.getPost(this.id)
      .subscribe(post => { this.post = post; console.log(post);
       })

  }


}
