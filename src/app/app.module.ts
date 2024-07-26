import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarrucelServiciosComponent } from './basic/components/carrucel-servicios/carrucel-servicios.component';
import { InicioComponent } from './basic/components/inicio/inicio.component';
import { NavBarComponent } from './basic/components/nav-bar/nav-bar.component';

import { EtConsultaVetComponent } from './basic/shared/et-consulta-vet/et-consulta-vet.component';
import { EtDomicilioVetComponent } from './basic/shared/et-domicilio-vet/et-domicilio-vet.component';
import { EtEsteticaVetComponent } from './basic/shared/et-estetica-vet/et-estetica-vet.component';
import { EtFarmtaVetComponent } from './basic/shared/et-farmta-vet/et-farmta-vet.component';
import { EtLaboratorioVetComponent } from './basic/shared/et-laboratorio-vet/et-laboratorio-vet.component';
import { EtPensionVetComponent } from './basic/shared/et-pension-vet/et-pension-vet.component';
import { EtVentaVetComponent } from './basic/shared/et-venta-vet/et-venta-vet.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CarrucelServiciosComponent,
    InicioComponent,
    EtConsultaVetComponent,
    EtDomicilioVetComponent,
    EtEsteticaVetComponent,
    EtFarmtaVetComponent,
    EtLaboratorioVetComponent,
    EtPensionVetComponent,
    EtVentaVetComponent,
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
