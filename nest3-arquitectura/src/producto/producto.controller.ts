import { Body, Controller, Get, Post, Param, Put, Delete} from '@nestjs/common';
import { ProductoService } from './producto.service';


@Controller('producto')


export class ProductoController {


constructor(private productoService:ProductoService){}
@Get()
funListar(){
    let productos=this.productoService.findAll()
    return productos
}
@Post()
funGuardar(@Body()prod){
    let respuesta=this.productoService.create(prod);
    return respuesta
}
@Get(":id")
funmostar(@Param("id")id){
    return "Mostrando.."+id;
}
@Put(":id")
funmodificar(@Param("id")id,@Body()prod)
{
    let respuesta=this.productoService.update(id,prod);
    return respuesta
}

@Delete(":id")
funeliminar(@Param("id")id)
{
    let respuesta=this.productoService.delete(id);
    return respuesta
    return"eliminado"+id }

@Post()
funguardar(@Body()prod)
{
    let respuesta=this.productoService
    return respuesta
}

}
