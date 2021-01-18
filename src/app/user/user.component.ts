import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../classes/user';
import {faPencilAlt, faTrash, faSearch} from '@fortawesome/free-solid-svg-icons';


import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  pencil=faPencilAlt;
  trash=faTrash;
  search=faSearch;

 @Input() user!:User;
 @Output('onDeletedUser') userDeleted= new EventEmitter();
 @Output('onSelectedUser') userSelected= new EventEmitter();

 constructor(private userService: UserService, private route: Router) {
}

ngOnInit() {
}

deleteUser() {

  this.userDeleted.emit(this.user);


}

updateUser() {
  this.route.navigate(['users', this.user.id, 'edit']);
  this.userSelected.emit(this.user);

}
showUserDetail() {
  this.route.navigate(['users', this.user.id]);
  this.userSelected.emit(this.user);

}

}
