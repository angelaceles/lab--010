import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/users';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-user',
  templateUrl: './listar-user.component.html',
  styleUrls: ['./listar-user.component.css']
})
export class ListarUserComponent implements OnInit{
  listUsuarios: Usuario[] = [];
  elementos: number = 0;
  
  constructor(private _userService: UserService) {}
  
  
  ngOnInit(): void {
    this.ObtenerUser();
  }

  ObtenerUser(){
    this._userService.getUsers().subscribe(data => {
      console.log(data);
      this.listUsuarios = data;
      this.elementos = this.listUsuarios.length;
    })
  }

  eliminarProducto(id: any){
    this._userService.deleteUser(id).subscribe(data => {

      Swal.fire({
        title: 'Eliminacion de Producto',
        text: "¿Desea eliminar el producto?",
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          console.log(data);
          this.ObtenerUser();
          this.elementos = this.listUsuarios.length;
        }
      })
    })
  }
}
