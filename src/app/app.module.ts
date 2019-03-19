import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { LocationComponent } from './components/location/location.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterEmplComponent } from './components/register-emp/registerEmp.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    RegisterComponent,
    HomeComponent,
    RegisterEmplComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyCDGm1FdbNfkn840pnZ_bmbSpDuPnyh8WY'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
