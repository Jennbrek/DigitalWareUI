import { Component, OnInit } from '@angular/core';
import { CompraService } from '../service/compra.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-compra',
  templateUrl: './ver-compra.component.html',
  styleUrls: ['./ver-compra.component.css']
})
export class VerCompraComponent implements OnInit {
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

  irListado = () => {
    this.router.navigateByUrl('/listar');
  }


}
