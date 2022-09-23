import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //private router: Router,
  constructor(public authService : AuthService, private router: Router) { }

  ngOnInit(): void {
  }


  onSignup(form:  NgForm){

    if(form.invalid){
      return;
    }
    console.log(form.value.name)
    this.authService.createUser(form.value.name, form.value.email,form.value.password);

    this.router.navigate(['login']);
  };



  goToLogin(){
    this.router.navigate(['login']);
  }

  // registerUser(event){
  //   event.preventDefault()
  //   const errors = []
  //   const target = event.target
  //   const username = target.querySelector('#username').value
  //   const password = target.querySelector('#pwd').value
  //   const cpassword = target.querySelector('#cpwd').value

  //   if(password != cpassword){
  //     errors.push("password do not match")
  //   } 

  //   if(errors.length == 0){
  //     this.auth.registerUser(username,password).subscribe(data => {
  //       console.log(data)
  //       if(data.success){
  //         this.router.navigate(['home'])
  //       }
  //     })
  //   }
  //   console.log(username,password)
  // }

  
}
