import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import { Blog } from '../Entities/blog';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  BlogPost: FormGroup;
  Submitted: boolean = false;
  Success: boolean = false;
  

  constructor(private svc: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.BlogPost = this.formBuilder.group({
      Subject:['',[Validators.required, Validators.maxLength(20)]],
      MessageBody:['',[Validators.required,Validators.maxLength(1000)]],
   })
  }

  onSubmit() {
    //add room submit
    this.Submitted = true;
       if(this.BlogPost.invalid){
         return;
       }else
       {
         //success
         this.Success = true;
         this.postBlog(this.BlogPost.value);
         this.BlogPost.reset();
         this.Submitted = false;
         //this.router.navigate(['']); // redirect to home
       }
  }

  postBlog(Blog: Blog){
    Blog.UserID = parseInt(sessionStorage.getItem("UserID"));
    console.log(Blog);
    this.svc.postBlog(Blog).subscribe(data => {
      //post success
      console.log("Post success");

    }, error => {
      //httpclient post error handling 
      console.log("Error", error);
    }); 
  }
 
}
