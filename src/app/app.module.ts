import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { BlogComponent } from './blog/blog.component';
//Classes
import { Blogger } from './Entities/blogger';
import { User } from './Entities/user';
import { Blog } from './Entities/blog';
import { Profile } from './Entities/profile';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    BlogComponent,
    NavComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'})//withConfig: remove warning message when using formcontrolname and ngModel
  ],
  providers: [ApiService, User, Blogger, Blog, Profile ],
  bootstrap: [AppComponent]
})
export class AppModule { }
