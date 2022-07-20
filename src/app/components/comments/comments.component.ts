import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  URL:any="https://jsonplaceholder.typicode.com/comments";
  commentsData:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.URL)
     .subscribe(res=>{
      console.log(res);
      this.commentsData=res;
     })
     console.log(this.commentsData)
  }

}
