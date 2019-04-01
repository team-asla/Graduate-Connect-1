import { Component, OnInit, HostBinding } from '@angular/core';

import { moveIn } from '../router.animations';

import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [moveIn()],
  host: {'[@moveIn]': ''}
})
export class LoginComponent implements OnInit {
  

    error: any;
    public form: FormGroup;
    constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirm: ['', Validators.required]
    });
  }
     ngOnInit() {
     }

     loginGoogle()
     {
      this.authService.loginWithGoogle();
     }

      loginFb()
      {
       this.authService.loginFb();
      }

     login()
   {
     const inputValue = this.form.value;
     console.log(inputValue.email, inputValue.password);
   }
}


  

    
      
  

  //    this.af.auth.onAuthStateChanged((auth) => {
  //      if (auth) {
  //        this.router.navigateByUrl('/members');
  //      }
  //    });
  //  }

  // 

  //  loginFb() {
  //    this.af.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(
  //      (success) => {
  //        this.router.navigate(['/members']);
  //      }).catch(
  //        (err) => {
  //          this.error = err;
  //        })
  //  }

  //  loginGoogle() {
  //    this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
  //      (success) => {
  //        this.router.navigate(['/members']);
  //      }).catch(
  //        (err) => {
  //          this.error = err;
  //        })
  //  }



