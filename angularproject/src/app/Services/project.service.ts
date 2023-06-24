import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

    constructor(private http:HttpClient) { }

 

    url=' http://localhost:3000/posts'

      headers = new HttpHeaders().set('Content-Type','application/json').set('Accept','application/json')

  httpOptions={

  headers:this.headers

  }

  // heade2=new HttpHeaders()

    get(){

    return  this.http.get(this.url)

   

    }

   

   

    post(task:object){

      return this.http.post(`${this.url}`,task)

    }

   

    removedate(id:number):Observable<any>{

      const url=`${this.url}/${id}`

  return this.http.delete(url,this.httpOptions)

    }

   

    updateTask(task){

      return   this.http.put(`${this.url}/${task.id}`,task, {headers:this.headers});

  }
}
