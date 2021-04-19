import { Component, OnInit } from '@angular/core';
import { CompraService } from '../service/compra.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-eliminar-compra',
  templateUrl: './eliminar-compra.component.html',
  styleUrls: ['./eliminar-compra.component.css']
})
export class EliminarCompraComponent implements OnInit {
  compra:any;
  constructor(private compraService: CompraService, 
    private router: Router,
    private route: ActivatedRoute) { }

    ngOnInit(): void {
      this.ObtenerDetalle(this.route.snapshot.paramMap.get('id'));
    }
  
    ObtenerDetalle(id){
      this.compraService.obtenerDetalle(id).subscribe(compra => {
        this.compra = compra;
      }, error =>{
        console.log(error);
      });
    }

    eliminarRegistro(){
      this.compraService.eliminar(this.compra.idCompra).subscribe((data)=>{
        this.router.navigateByUrl('/listar');
      });
      
    }
  
    irListado = () => {
      this.router.navigateByUrl('/listar');
    }

}
