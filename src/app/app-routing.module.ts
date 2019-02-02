import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';

const routes: Routes = [
  {path:'',redirectTo:'adminlogin',pathMatch:'full'},
  { path:'header', component: HeaderComponent },
  { path:'form', component: FormComponent },
  { path:'adminlogin', component: AdminloginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
