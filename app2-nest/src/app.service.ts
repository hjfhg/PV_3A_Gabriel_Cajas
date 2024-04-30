import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getListaProductos(){
  return [
    {nombre:"Teclado",cantidad: 25,precio: 20},
    {nombre:"Monitor",cantidad: 30,precio: 100},
    {nombre:"Mause",cantidad: 21,precio: 21},
    {nombre:"Impresora",cantidad: 21,precio: 100},
    {nombre:"Procesador",cantidad: 25,precio: 500},
    {nombre:"Placa madre",cantidad: 21,precio: 75},
    {nombre:"Ramx2 8GB",cantidad: 21,precio: 35},
    {nombre:"SSD",cantidad: 21,precio: 20},
    {nombre:"HDD",cantidad: 21,precio: 30},
    {nombre:"fuente de poder",cantidad: 21,precio: 35},
    {nombre:"Gabinete",cantidad: 21,precio: 50}
  ]
  }
}
