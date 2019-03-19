import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { RegisterComponent } from './components/register/register.component';
import { LocationComponent } from './components/location/location.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterEmplComponent } from './components/register-emp/registerEmp.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'registro', component: RegisterComponent},
    {path: 'mapa', component: LocationComponent},
    {path: 'registro-trabajadores', component: RegisterEmplComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
