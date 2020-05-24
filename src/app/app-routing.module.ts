import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { FormUploadComponent } from './form-upload/form-upload.component';
import { ListUploadComponent } from './list-upload/list-upload.component';


const routes: Routes = [
  {path:'authentication', component: AuthenticationComponent},
  {path:'listfiles', component: ListUploadComponent},
  {path:'header', component:  HeaderComponent},
  {path:'welcomepage', component:  WelcomepageComponent},
  {path:'formupload', component:  FormUploadComponent},
  {path:'', redirectTo:'/welcomepage', pathMatch: 'full'},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}     
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
