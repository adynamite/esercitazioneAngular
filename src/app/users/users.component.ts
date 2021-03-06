import { Component, EventEmitter,OnInit, Output } from '@angular/core';
import { User } from '../classes/user';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  title="Users";
  users:User[]=[];
  @Output() updateUser=new EventEmitter<User>();
  
  constructor(private service:UserService) {
   
   }

  ngOnInit(): void {
    this.users=this.service.getUsers();

  }

  onDeletedUser(user:User){
    this.service.deleteUser(user);
 
  }

  onSelectedUser(user:User){
    const userCopy=Object.assign({},user);
   this.updateUser.emit(userCopy);
  }

}
