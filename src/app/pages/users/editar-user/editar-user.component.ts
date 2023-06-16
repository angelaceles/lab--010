import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-editar-user',
  templateUrl: './editar-user.component.html',
  styleUrls: ['./editar-user.component.css']
})
export class EditarUserComponent implements OnInit {
  
  userForm: FormGroup;
  id: string | null;

  constructor(private fb: FormBuilder,
              private aRouter: ActivatedRoute,
              private router: Router,
              private _userService: UserService)
  {
    this.userForm = this.fb.group({
    username:  ['', Validators.required],
    password: ['', Validators.required],
    email_address: ['', Validators.required],
    })
    this.id = aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.validarId();
  }
  validarId(){

    if(this.id !== null){
      this._userService.viewUser(this.id).subscribe(data => {
        this.userForm.setValue({
          producto: data.producto,
          categoria: data.categoria,
          ubicacion: data.ubicacion,
          precio: data.precio
        })
      })
    }

  }

  editarUSER(){
    
    const USER: User = {
      username: this.userForm.get('username')?.value,
      password: this.userForm.get('password')?.value,
      email_address: this.userForm.get('email_address')?.value,
    }

    Swal.fire({
          title: 'Actualizacion de User',
          text: "¿Desea actualizar el User?",
          icon: 'info',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Aceptar',
          cancelButtonText: 'Cancelar'
        }).then((result) => {
          if (result.isConfirmed) {
            if(this.id !== null){
              this._userService.actualizarUser(this.id, USER).subscribe(data => {
                  console.log(USER);
                  this.router.navigate(['/listar-usuarios']) 
              })
            }
          }
        })       
  }
}
