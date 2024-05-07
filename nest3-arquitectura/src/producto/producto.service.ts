import {Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';
import { Repository } from 'typeorm';


@Injectable()
export class ProductoService {
    private productos: any[]=[];

    constructor(@InjectRepository(Producto)private readonly productoRepository: Repository<Producto>){}
    
    async findAll():Promise<any[]>{
        return await this.productoRepository.find();
    }


    async create (prod:any){
        // this.productos.push(prod);
        //producto1 esta cambiado porque el inge puso "Producto" con mayuscula
        const producto=new Producto();
        producto.nombre=prod.nombre;
        producto.precio=prod.precio;
        producto.cantidad=prod.cantidad;
        producto.imagen=prod.imagen;    
        return await this.productoRepository.save(producto)
        //return prod;
    }
    update(nombre:string,prod:any):any{
        const index=this.productos.findIndex(existeProd=>existeProd.nombre==nombre)
        if(index!=-1){
            this.productos[index]=prod;
            return this.productos[index];
           
        }
        return null
    }
    delete(nombre:string):any{
        const index=this.productos.findIndex(existeProd=>existeProd.nombre==nombre);
        if(index!==-1){
            //eliminar el rpoducto encontrado en el array
            const productoEliminar=this.productos.splice(index,1)
            return productoEliminar[0];
        }
    }
}
