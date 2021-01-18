import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../classes/user';
import {faPencilAlt, faTrash} from '@fortawesome/free-solid-svg-icons';


import { UserService } from '../services/user.service';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  faPencil=faPencilAlt;
  faTrash=faTrash;

 @Input() user!:User;
 @Output('onDeletedUser') userDeleted= new EventEmitter();
 @Output('onSelectedUser') userSelected= new EventEmitter();

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    
  }

  deleteUser(){
      this.userDeleted.emit(this.user);
      

   //  this.userService.deleteUser(this.user);
    }

  updateUser(){
    this.userSelected.emit(this.user);
  }



}
