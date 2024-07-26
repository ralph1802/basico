import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EtConsultaVetComponent } from './basic/shared/et-consulta-vet/et-consulta-vet.component';
import { InicioComponent } from './basic/components/inicio/inicio.component';
import { NavBarComponent } from './basic/components/nav-bar/nav-bar.component';
import { EtFarmtaVetComponent } from './basic/shared/et-farmta-vet/et-farmta-vet.component';
import { EtEsteticaVetComponent } from './basic/shared/et-estetica-vet/et-estetica-vet.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    InicioComponent,
    EtConsultaVetComponent,
    EtFarmtaVetComponent,
    EtEsteticaVetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
