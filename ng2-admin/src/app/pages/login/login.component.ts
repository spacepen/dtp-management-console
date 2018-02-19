import {Component, AfterViewInit} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginService} from './login.service';
import {Http} from "@angular/http";


@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],

})
export class Login {


  public form:FormGroup;
  public password:AbstractControl;
  public submitted:boolean = false;

  constructor(fb:FormBuilder, private router:Router) {
    this.form = fb.group({
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.password = this.form.controls['password'];
  }


  public onSubmit(values:Object):void {
    this.submitted = true;
    if (this.form.valid) {
      // your code goes here

      this.router.navigate(['pages']);

    }
  }
}
