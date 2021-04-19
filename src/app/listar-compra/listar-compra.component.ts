import { Component, OnInit } from '@angular/core';
import { CompraService } from 'src/app/service/compra.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-compra',
  templateUrl: './listar-compra.component.html',
  styleUrls: ['./listar-compra.component.css']
})
export class ListarCompraComponent implements OnInit {
  compras:any;
  constructor(private compraService: CompraService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerCompras();
  }

  obtenerCompras(){
    this.compraService.obtener()
    .subscribe(
      compras => {
        this.compras = compras;
      },
      error => {
        console.log(error);
      });
  }

  irCrear = () => {
    this.router.navigateByUrl('/crear');
  }

  irBorrar=(event)=>{
    this.router.navigateByUrl(`/borrar/${event.row.values[0]}`);
  }

  irDetalle= (event) => {
    this.router.navigateByUrl(`/ver/${event.row.values[0]}`);
  }

  irEditar= (event) => {
    this.router.navigateByUrl(`/editar/${event.row.values[0]}`);
  }
}
