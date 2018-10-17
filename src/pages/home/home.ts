import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductosProvider } from '../../providers/productos/productos';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  productos = []
  constructor(public navCtrl: NavController, private ServicioProducto: ProductosProvider) {

  }

  ionViewDidLoad() {
    this.ServicioProducto.ObtenerProductos().subscribe(
      (datos: any[]) => { this.productos = datos; }
    );
  }

  detalleproducto(producto) {
    this.navCtrl.push('DetalleProductoPage', { datos: producto, otro: 1 });
  }

}