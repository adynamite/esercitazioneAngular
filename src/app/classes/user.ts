import { UserInterface } from "../interfaces/User";

export class User implements UserInterface{
    id:number;
    name: string;
      lastName: string;
      email:string;
      fiscalCode:string;
      province: string;
      phone:string;
      age:number;

      constructor(){
          this.id=0;
          this.name="";
          this.lastName="";
          this.email="";
          this.fiscalCode="";
          this.province="";
          this.phone="";
          this.age=0;
      }
}