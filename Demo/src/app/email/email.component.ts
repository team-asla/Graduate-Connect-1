import { Component, OnInit } from '@angular/core';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
import { moveIn, fallIn } from '../router.animations';
import { Observable } from 'rxjs';
import { from } from 'rxjs';



@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''},
  
})
export class EmailComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  state: string = '';
    error: any;
    fromPromise: any =  from(promiseSrc);

    constructor(public af: AngularFireAuth,private router: Router) {
    this.af.auth.onAuthStateChanged(auth => { 
      if(auth) {
        this.router.navigateByUrl('/members');
      }
    });
  }


  login(email, password): Observable<any>
  {
    return Observable.fromPromise(
      this.af.auth.signInWithEmailAndPassword(email, password)
    ).then(
        (success) => {
        console.log(success);
        this.router.navigate(['/members']);
      }).catch(
        (err) => {
        console.log(err);
        this.error = err;
      })
    }
  }

  
