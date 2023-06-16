import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { DataLoginService } from 'src/app/services/data-login.service';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  
  userForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private _userService: DataLoginService)
  {
    this.userForm = this.fb.group({
    username:  ['', Validators.required],
    password: ['', Validators.required],
    email_address: ['', Validators.required],
    }) 
  }

  agregarUser(){
    const USER: User = {
      username: this.userForm.get('username')?.value,
      password: this.userForm.get('password')?.value,
      email_address: this.userForm.get('email_address')?.value,
    }
    console.log(USER)

    this._userService.agregarUser(USER)
      .subscribe(
        res => {
          console.log(res)
          this.router.navigate(['/'])
        },
        err => console.log(err)
    )
  }
}
