import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ValidateEqualModule } from 'ng-validate-equal';
import { AddPostComponent } from './add-post/add-post.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { HttpClientModule } from '@angular/common/http';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { RegisterSuccessComponent } from './register-success/register-success.component';

 

@NgModule({
 
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    RegisterComponent,
    AddPostComponent,
    HomeComponent,
    PostComponent,
    RegisterSuccessComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    EditorModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot(),
    RouterModule.forRoot([
      {path:'', component: HomeComponent},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'add-post', component: AddPostComponent},
      {path: 'home', component: HomeComponent},
      {path: 'post/:id', component: PostComponent},
      {path: 'register-success', component: RegisterSuccessComponent}
    ]),
    ValidateEqualModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
