import { Injectable } from '@angular/core';
import { Iuser } from '../model/user';
import { Route, Router, Routes } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users : Array<Iuser> = [
    { id: "u001", username: "john_doe", userRole: "admin" },
    { id: "u002", username: "jane_smith", userRole: "super-admin" },
    { id: "u003", username: "alice_wonder", userRole: "candidate" },
    { id: "u004", username: "bob_builder", userRole: "admin" },
    { id: "u005", username: "claire_works", userRole: "candidate" },
    { id: "u006", username: "david_king", userRole: "super-admin" },
    { id: "u007", username: "emma_rain", userRole: "candidate" },
    { id: "u008", username: "frank_ocean", userRole: "admin" },
    { id: "u009", username: "grace_hopper", userRole: "super-admin" },
    { id: "u010", username: "harry_potter", userRole: "candidate" }
  ];
  constructor(
    private _router : Router,
    private _snackbar : SnackbarService,
  ) { }
  fetchUsers(){
    return this.users
  }
  
  getUser(id:string){
    return this.users.find(user=>user.id===id)        
  }
  removeUser(user:Iuser){
    let index = this.users.findIndex(u=>user.id===u.id)
    this.users.splice(index,1)
    this._snackbar.opensnackbar(`user : ${user.username}, is removed successfully`)
    this._router.navigate(['/users'])
  }
  addUser(obj:Iuser){
    this.users.push(obj)
    this._router.navigate(['/users'])
    this._snackbar.opensnackbar(`user ${obj.username} is added successfully`)
  }
  updateUser(updatedUser:Iuser){
    let index = this.users.findIndex(user=>user.id === updatedUser.id)
    this.users[index]=updatedUser
    this._router.navigate(['/users'])
    this._snackbar.opensnackbar(`user is updated to ${updatedUser.username}`)
  }
}
