import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearCompraComponent} from '../app/crear-compra/crear-compra.component';
import { EditarCompraComponent } from '../app/editar-compra/editar-compra.component';
import { VerCompraComponent } from '../app/ver-compra/ver-compra.component';
import { ListarCompraComponent } from '../app/listar-compra/listar-compra.component';
import { EliminarCompraComponent } from '../app/eliminar-compra/eliminar-compra.component';


const routes: Routes = [
  { path: '', redirectTo: 'listar', pathMatch: 'full' },
  { path: 'listar', component: ListarCompraComponent },
  { path: 'borrar/:id', component: EliminarCompraComponent },
  { path: 'crear', component: CrearCompraComponent },
  { path: 'ver/:id', component: VerCompraComponent },
  { path: 'editar/:id', component: EditarCompraComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
