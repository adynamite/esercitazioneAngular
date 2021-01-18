import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import { UserInterface } from '../interfaces/User';


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
   getUsers() {
    return this.users;
  }

  getUser(id: number) {
    return this.users.find(user => user.id === id);
  }

  deleteUser(user: UserInterface) {
    const index = this.users.indexOf(user);
    if (index >= 0) {
      this.users.splice(index, 1);
    }

  }

  updateUser(user: UserInterface) {
    const idx = this.users.findIndex((v) => v.id === user.id);
    alert(idx);
    if (idx !== -1) {
      this.users[idx] = user;
    }
  }


  createUser(user: UserInterface) {
    user.id = this.users.length + 1;
    this.users.splice(0, 0, user);

  }
  
}
