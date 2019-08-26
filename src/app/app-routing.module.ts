import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { SignInComponent } from './sign-in/sign-in.component';


const routes: Routes = [
  {path: "blog", component: BlogComponent},
  {path: "sign-in", component: SignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
