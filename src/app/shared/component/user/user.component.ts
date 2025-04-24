import { Component, OnInit } from '@angular/core';
import { Iuser } from '../../model/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { RemoveComponent } from '../remove/remove.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  id!:string
  userObj !:Iuser
  
  constructor(
    private _rout : ActivatedRoute,
    private _user : UserService,
    private _matDialog : MatDialog
  ) { }

  ngOnInit(): void {
    this.id = this._rout.snapshot.params['id']
    this.userObj = this._user.getUser(this.id)!;
  }

  removeUser() {
    let MatDialogreff = this._matDialog.open(RemoveComponent)
    MatDialogreff.afterClosed().subscribe(res=>{
      if(res){
        this._user.removeUser(this.userObj)
      }
    })
  }

}
