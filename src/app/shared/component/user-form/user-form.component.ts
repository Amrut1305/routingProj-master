import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Iuser } from '../../model/user';
import { NgForm } from '@angular/forms';
import { UuidService } from '../../services/uuid.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  isInEditMode :boolean = false
  userId !: string
  userObj !: Iuser
  @ViewChild('userForm') userForm !: NgForm
  mode : string='create'

  constructor(
    private _routs : ActivatedRoute,
    private _userService : UserService,
    private _uuidService : UuidService
  ) { }

  ngOnInit(): void {
    this.userId = this._routs.snapshot.params['id']
    if(this.userId){
      this.isInEditMode=true
      this.mode = 'edit'
      this.userObj=this._userService.getUser(this.userId)!
      setTimeout(()=>{
        this.userForm.form.patchValue(this.userObj)
      },0)
    }else{
      this.isInEditMode=false
      this.mode = 'create'
    }

  }

  onUserSubmit() {
    if(this.userForm.valid){
      if(this.isInEditMode){
        let updatedUser = {
          ...this.userForm.value,
          id:this.userObj.id
        }
        this._userService.updateUser(updatedUser)
        this.userForm.reset()
      }else{
        let newUser = {
          ...this.userForm.value,
            id: this._uuidService.uuid()
        }
        this._userService.addUser(newUser)
      }
      }
  }
}
