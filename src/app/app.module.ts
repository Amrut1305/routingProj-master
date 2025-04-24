import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { UsersComponent } from './shared/component/users/users.component';
import { HomeComponent } from './shared/component/home/home.component';
import { PoductsComponent } from './shared/component/poducts/poducts.component';
import { UserFormComponent } from './shared/component/user-form/user-form.component';
import { MaterialModule } from './shared/material/material.module';
import { UserComponent } from './shared/component/user/user.component';
import { RemoveComponent } from './shared/component/remove/remove.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsersComponent,
    HomeComponent,
    PoductsComponent,
    UserFormComponent,
    UserComponent,
    RemoveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
