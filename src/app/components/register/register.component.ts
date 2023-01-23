import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})



export class RegisterComponent implements OnInit{

  formRegister!:FormGroup;

  constructor(
    private userservice:UserServiceService,
    private router:Router,
  ){
    this.formRegister = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    })
  }

  ngOnInit(): void {

    
  }

  onSubmit(){
    //console.log(this.formRegister.value);

    this.userservice.registerUser(this.formRegister.value)
    .then( response => {
      console.log(response)
      this.router.navigate(['/login']);
    })
    .catch( erorr => console.log(erorr));

  }

  

}
