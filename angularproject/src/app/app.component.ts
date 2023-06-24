import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private service:ServiceService){
   this.createform() 
  }
  ngOnInit(){
this.postdata
  }

  myform:FormGroup;
  createform(){
this.myform=new FormGroup({
  'addTask':new FormControl,
  'date':new FormControl,
  'add':new FormArray(
   [ new FormControl,new FormControl]
  )
})}

addTask
date
alldata=false
moretask:boolean=false

postdata(body:string){
//   let bodyy={
// id:this.addTask,
// date:this.date
//   }
  // this.service.post(`user`,{body}).subscribe(res=>{
    // console.log(res);
    
  // })
}
 onsubmit(){
    this.alldata=true
    console.log(this.myform);   
  }
  OnAddSkills(){
     this.moretask=true;
  (<FormArray>this.myform.get('add')).push(new FormControl())
  }
removeTasks(){
}
}
