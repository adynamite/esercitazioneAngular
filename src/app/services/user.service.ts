import { Injectable } from '@angular/core';
import { User } from '../classes/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  users :Array<User> =[
    {
      id:1,
      name: 'Adina1',
      lastName: 'Popa',
      email:'adina.informatica@gmail.com',
      fiscalCode:'PPODNA93A57Z129R',
      province: 'Ancona',
      phone:'3456666629',
      age:27
    },
    {
      id:2,
      name: 'Adina2',
      lastName: 'Popa',
      email:'adina.informatica@gmail.com',
      fiscalCode:'PPODNA93A57Z129R',
      province: 'Ancona',
      phone:'3456666629',
      age:28
    },
    {
      id:3,
      name: 'Adina3',
      lastName: 'Popa',
      email:'adina.informatica@gmail.com',
      fiscalCode:'PPODNA93A57Z129R',
      province: 'Ancona',
      phone:'3456666629',
      age:29
    }
  ];
  constructor() {
   
   }

  getUsers(){
    return this.users;
  }

  deleteUser(user:User){

    let index=this.users.indexOf(user);

    if(index>=0){
    this.users.splice(index,1);}
  }

  updateUser(user:User){
    const idx=this.users.findIndex((v)=>v.id===user.id);
   
    if(idx!== -1){
      this.users[idx]=user;
    }
  }

  createUser(user:User){

      this.users.splice(0,0,user);
    
  }

  
}
