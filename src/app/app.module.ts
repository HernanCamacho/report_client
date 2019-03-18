import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { LocationComponent } from './components/location/location.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyCDGm1FdbNfkn840pnZ_bmbSpDuPnyh8WY'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
