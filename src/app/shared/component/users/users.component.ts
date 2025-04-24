import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Iuser } from '../../model/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  userData !: Array<Iuser>
  constructor(
    private _user : UserService
  ) { }

  ngOnInit(): void {
    this.userData = this._user.fetchUsers()
  }

}
