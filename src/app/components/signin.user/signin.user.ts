import { Component } from '@angular/core';
import { UserSigninRequest } from 'src/app/dtos/userSigninRequest.dto';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin-user',
  templateUrl: './signin.user.html',
  styleUrls: ['./signin.user.css']
})
export class SigninUserComponent {
  userSigninRequest: UserSigninRequest = {
	  userLogin: "",
	  passwordLogin: ""
  };

  constructor(private authService: AuthService) {

  }

  signInn(){
    this.authService.signIn(this.userSigninRequest).subscribe(
      x => {
        alert(x.message)
      }
    );
  }

}
