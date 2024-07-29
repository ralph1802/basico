import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarrucelServiciosComponent } from './basic/components/carrucel-servicios/carrucel-servicios.component';
import { InicioComponent } from './basic/components/inicio/inicio.component';
import { NavBarComponent } from './basic/components/nav-bar/nav-bar.component';

import { BarraComentariosComponent } from './basic/components/barra-comentarios/barra-comentarios.component';
import { EtConsultaVetComponent } from './basic/shared/et-consulta-vet/et-consulta-vet.component';
import { EtDomicilioVetComponent } from './basic/shared/et-domicilio-vet/et-domicilio-vet.component';
import { EtEsteticaVetComponent } from './basic/shared/et-estetica-vet/et-estetica-vet.component';
import { EtFarmtaVetComponent } from './basic/shared/et-farmta-vet/et-farmta-vet.component';
import { EtLaboratorioVetComponent } from './basic/shared/et-laboratorio-vet/et-laboratorio-vet.component';
import { EtPensionVetComponent } from './basic/shared/et-pension-vet/et-pension-vet.component';
import { EtVentaVetComponent } from './basic/shared/et-venta-vet/et-venta-vet.component';
import { NosotrosComponent } from './basic/components/nosotros/nosotros.component';
import { Presentacion1Component } from './basic/shared/presentacion1/presentacion1.component';
import { PresentacionesComponent } from './basic/components/presentaciones/presentaciones.component';
import { Presentacion2Component } from './basic/shared/presentacion2/presentacion2.component';
import { Presentacion3Component } from './basic/shared/presentacion3/presentacion3.component';
import { Presentacion4Component } from './basic/shared/presentacion4/presentacion4.component';
import { Presentacion5Component } from './basic/shared/presentacion5/presentacion5.component';
import { Presentacion6Component } from './basic/shared/presentacion6/presentacion6.component';

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
    BarraComentariosComponent,
    NosotrosComponent,
    Presentacion1Component,
    Presentacion2Component,
    Presentacion3Component,
    Presentacion4Component,
    Presentacion5Component,
    Presentacion6Component,
    PresentacionesComponent,
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
