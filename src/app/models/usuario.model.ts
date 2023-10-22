import { Role } from "./role.model"
import { TipoDocument } from "./tipo-document.model"

export class Usuario {

    id?:number
    namesUser?:String
    lastnameP?:String
    lastnameM?:String
    registrationDate?:Date|null
    address?:String
    cellphone?:String
    email?:String
    userLogin?:String
    passwordLogin?:String
    dateBirth?:String|null
    tipoDocument?:TipoDocument
    role?:Role
}
