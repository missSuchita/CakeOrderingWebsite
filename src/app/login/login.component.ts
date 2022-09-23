import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { AuthService } from './../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userData : any = [];
  secondKey : any;
  //login: any = FormGroup;

  constructor( private router: Router, private authService: AuthService) { }

  ngOnInit(): void {

    // this.login = this.fb.group({
     
    //   email:["",Validators.compose([Validators.required,Validators.email])],
    //   password: []
    // })

    this.authService.getUserDetails().subscribe((data:any)=> {
      this.userData = data;
    })

  }


  onLogin(data : NgForm){
   
    console.log(this.userData);  //here we get userData of type object it has two object {message:"" users:[]}
    this.secondKey = Object.keys(this.userData)[1];  // extracting second object key users 
    console.log(this.userData[this.secondKey]);     // with the help of key geting value of users
   
    if(data.value.email){
      var count = 0;
     this.userData[this.secondKey].forEach((item:any) => {
       
        if(item.email === data.value.email && item.password === data.value.password){
          console.log("user is valid");
          count = 1;
          localStorage.setItem("isLoggedIn","true");
          this.router.navigate(['home']);
        }
        
      });

      if(count === 0){
        console.log("user is invalid");
          localStorage.clear();
          alert("Invalid User");
      }
    }
    console.log(data.value.email)
    console.log(data.value.password)
  }

  goToSignup(){
    this.router.navigate(['register']);
  }

}
