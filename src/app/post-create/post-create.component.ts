import { Component, OnInit, Input } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { Router } from '@angular/router';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  @Input() postDetails = { title: '', body: ''}

  constructor(
    public restApi: RestApiService, 
    public router: Router,
    public commonData:CommonService
  ) { }

  ngOnInit() { }

  addPost() {
    this.restApi.createPost(this.postDetails).subscribe((data: {}) => {
      this.router.navigate(['/post-list'])
    })
  }

}
