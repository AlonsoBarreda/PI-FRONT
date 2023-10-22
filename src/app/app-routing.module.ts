import { LoginComponent } from './auth/login.component';
import { IndexComponent } from './index/index.component';
import { AddUsuarioComponent } from './components/add-usuario/add-usuario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: "verActualizaUser",componen: AddUsuarioComponent }
  { path: '', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {


}
