import { Component, OnInit } from '@angular/core';
import { CompraService } from '../service/compra.service';
import { Router } from '@angular/router';
import { CompraFacturacion } from '../entity/compra-facturacion';
import { ClienteService} from '../service/cliente.service';
import { ProductoService} from '../service/producto.service';


@Component({
  selector: 'app-editar-compra',
  templateUrl: './editar-compra.component.html',
  styleUrls: ['./editar-compra.component.css']
})
export class EditarCompraComponent implements OnInit {
  compra:CompraFacturacion;
  clientes:any;
  productos:any;

  constructor( private compraService: CompraService, 
    private clienteService: ClienteService,
    private productoService:ProductoService,
    private router: Router) { }

    ngOnInit(): void {
      this.obtenerClientes();
      this.obtenerProductos();
    }
  
    obtenerClientes(){
      this.clienteService.obtener().subscribe(clientes => {
        this.clientes = clientes;
      }, error =>{
        console.log(error);
      });
    }
  
    obtenerProductos(){
      this.productoService.obtener().subscribe(productos => {
        this.productos = productos;
      }, error =>{
        console.log(error);
      });
    }

    actualizarCompra(){
      this.compraService.actualizar(this.compra);
    }

    irListado = () => {
      this.router.navigateByUrl('/listar');
    }

}
