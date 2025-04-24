import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/component/home/home.component';
import { UsersComponent } from './shared/component/users/users.component';
import { PoductsComponent } from './shared/component/poducts/poducts.component';
import { UserFormComponent } from './shared/component/user-form/user-form.component';
import { UserComponent } from './shared/component/user/user.component';

const routes: Routes = [
  {
    path : '',
    component : HomeComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path: 'users',
    component:UsersComponent
  },
  {
    path: 'users/adduser',
    component: UserFormComponent
  },
  {
    path: 'users/:id',
    component: UserComponent
  },
  {
    path: 'users/:id/edituser',
    component: UserFormComponent
  },
  {
    path: 'products',
    component: PoductsComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
