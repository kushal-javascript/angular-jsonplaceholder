import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  URL:any="https://jsonplaceholder.typicode.com/todos";
  todosData:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
     this.http.get(this.URL)
     .subscribe(res=>{
      console.log(res);
      this.todosData=res;
     })
  }
}
