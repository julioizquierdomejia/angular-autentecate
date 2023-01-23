import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private userservice:UserServiceService, private router:Router){

  }

  logout(){
    this.userservice.logout()
    .then( ()=> {
      this.router.navigate(['/login']);
    } )
    .catch( error => console.log(error))
  }

}
