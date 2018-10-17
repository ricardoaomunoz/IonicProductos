import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { dateSortValue } from 'ionic-angular/umd/util/datetime-util';

@Injectable()
export class ProductosProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ProductosProvider Provider');
  }

  ObtenerProductos(){
    return this.http.get('assets/data.json');    
  }

}
