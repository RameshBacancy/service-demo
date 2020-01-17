import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  Post: any = [];

  constructor(
    public restApi: RestApiService,
    public commonData:CommonService
  ) { }

  ngOnInit() {
    this.loadPost()
  }

  // Get post list
  loadPost() {
    return this.restApi.getPosts().subscribe((data: {}) => {
      this.Post = data;
    })
  }

  // Delete post
  deletePost(id) {
    if (window.confirm('Are you sure, you want to delete?')){
      this.restApi.deletePost(id).subscribe(data => {
        this.loadPost()
      })
    }
  }  

}
