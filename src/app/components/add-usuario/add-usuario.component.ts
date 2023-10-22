import { Component } from '@angular/core';
import { Role } from 'src/app/models/role.model';
import { TipoDocument } from 'src/app/models/tipo-document.model';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css']
})
export class AddUsuarioComponent {

  lstTipDoc : TipoDocument[] = [];

  lstRoles : Role[] = [];

  objUser: Usuario = {
    id:0,
    namesUser:"",
    lastnameP:"",
    lastnameM:"",
    registrationDate:null,
    address:"",
    cellphone:"",
    email:"",
    userLogin:"",
    passwordLogin:"",
    dateBirth:null,
    tipoDocument:{id:-1},
    role:{id:-1}
       
    } 

    constructor(private usuarioService: UsuarioService ) {

      /*actualiza(){
        console.log(">>> actualiza  >> ");
        console.log(">>> id >> " + this.objUser.id);
        console.log(">>> nombre >>  " + this.objUser.namesUser);
        console.log(">>> nombre >>  " + this.objUser.lastnameP)
        console.log(">>> nombre >>  " + this.objUser.lastnameM)
        console.log(">>> dni >>  " + this.objUser.registrationDate);
        console.log(">>> estado >>  " + this.objUser.address);
        console.log(">>> idUbigeo >>  " + this.objUser.cellphone);
        console.log(">>> departamento >>  " + this.objUser.userLogin);
        console.log(">>> provincia >>  " + this.objUser.passwordLogin);
        console.log(">>> distrito >>  " + this.objUser.dateBirth);
        console.log(">>> distrito >>  " + this.objUser.tipoDocument);
        console.log(">>> distrito >>  " + this.objUser.role);*/
      
       
          this.usuarioService.actualiza(this.objUser).subscribe(
                x => alert(x) 
          );
        }
    
}


