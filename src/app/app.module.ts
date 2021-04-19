import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearCompraComponent } from './crear-compra/crear-compra.component';
import { EditarCompraComponent } from './editar-compra/editar-compra.component';
import { VerCompraComponent } from './ver-compra/ver-compra.component';
import { DxDataGridModule, DxFormModule, DxButtonModule, DxDropDownBoxModule,DxListModule } from 'devextreme-angular';
import { ListarCompraComponent } from './listar-compra/listar-compra.component';
import { EliminarCompraComponent } from './eliminar-compra/eliminar-compra.component';


@NgModule({
  declarations: [
    AppComponent,
    CrearCompraComponent,
    EditarCompraComponent,
    VerCompraComponent,
    ListarCompraComponent,
    EliminarCompraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxButtonModule,
    DxDataGridModule,
    DxFormModule,
    DxListModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
