import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { RegisterComponent } from './components/register/register.component';
import { LocationComponent } from './components/location/location.component';

const routes: Routes = [
    {path: '', component: RegisterComponent},
    {path: 'mapa', component: LocationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
