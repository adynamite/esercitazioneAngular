import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../classes/user';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  @Input()
  user!: User;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  saveUser(){
    if(this.user.id>0){
      this.userService.updateUser(this.user);
    }else{
      this.userService.createUser(this.user);
    }
  }

  resetForm(form:NgForm){
   if(this.user.id===0){
     this.user=new User();}
     else{
      form.reset();}
  }

}
