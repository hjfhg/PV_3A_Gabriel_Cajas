import {Injectable } from '@nestjs/common';


@Injectable()
export class ProductoService {
    private productos: any[]=[];
    findAll():any[]{
        return this.productos
    }
    create (prod:any){
        this.productos.push(prod)
        return prod
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
