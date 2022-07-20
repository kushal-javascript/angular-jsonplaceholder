import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  URL:any="https://jsonplaceholder.typicode.com/albums";
  albumsData:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
     this.http.get(this.URL)
     .subscribe(res=>{
      console.log(res);
      this.albumsData=res;
     })
  }
}
