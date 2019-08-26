import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import { FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import { User } from '../Entities/user';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  Users: any;
  user: any;
  SignIn: FormGroup;
  Submitted: boolean = false;
  Success: boolean = false;

  constructor(private service: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.SignIn = this.formBuilder.group({
      Username:['',[Validators.required]],
      Password:['',[Validators.required]],
   })


  }


  onSubmit() {
    //add room submit
    this.Submitted = true;
       if(this.SignIn.invalid){
         return;
       }else
       {
         //success
         this.Success = true;
         this.signin(this.SignIn.value);
         this.SignIn.reset();
         this.Submitted = false;
         //this.router.navigate(['']); // redirect to home
       }
  }

  signin(obj: any){
    this.service.getLoggedInUser(obj.Username, obj.Password).subscribe(data => {
      //post success
      //this.user = new User();
      this.user = data;
      sessionStorage.setItem("UserID", this.user.id);
      console.log("success");

    }, error => {
      //httpclient post error handling 
      console.log("Error", error);
    });  
  }


}
