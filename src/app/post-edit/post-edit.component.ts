import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  postData: any = {};

  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router,
    public commonData:CommonService
  ) { 
  }

  ngOnInit() { 
    this.restApi.getPost(this.id).subscribe((data: {}) => {
     this.postData = data;
    })
  }

  // Update post data
  updatePost() {
    if(window.confirm('Are you sure, you want to update?')){
      this.restApi.updatePost(this.postData).subscribe(data => {
        this.router.navigate(['/post-list'])
      })
    }
  }
}
