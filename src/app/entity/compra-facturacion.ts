import { ClienteFacturacion } from "./cliente-facturacion";
import { ProductoFacturacion } from "./producto-facturacion";

export class CompraFacturacion {
	Id: number;
	Productos:ProductoFacturacion[];
    Cliente:ClienteFacturacion;
}