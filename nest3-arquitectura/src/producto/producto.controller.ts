import { Body, Controller, Get, Post, Param, Put, Delete} from '@nestjs/common';
import { ProductoService } from './producto.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';


@ApiTags('CRUD Productos')
@Controller('producto')
export class ProductoController {

constructor(private productoService:ProductoService){}
@ApiOperation({summary:'obtener lista de productos'})
@ApiResponse({status:200, description:'retorna lista de producto'})
@Get()
funListar(){
    let productos=this.productoService.findAll()
    return productos
}


@ApiOperation({summary:'CREA NUEVO PRODUCTO'})
@ApiResponse({status:201, description:'registra nuevo producto'})
@Post()
funGuardar(@Body()prod:Create){
    let respuesta=this.productoService.create(prod);
    return respuesta
}

@ApiOperation({summary:'producto especifico'})
@ApiResponse({status:201, description:'trae un producto en especifico'})
@Get(":id")
funmostar(@Param("id")id){
    return "Mostrando.."+id;
}


@ApiOperation({summary:'modifica producto '})
@ApiResponse({status:201, description:'modifica producto en especifico'})
@Put(":id")
funmodificar(@Param("id")id,@Body()prod)
{
    let respuesta=this.productoService.update(id,prod);
    return respuesta
}


@ApiOperation({summary:'producto eliminado'})
@ApiResponse({status:201, description:'elimina un producto en especifico'})
@Delete(":id")
funeliminar(@Param("id")id)
{
    let respuesta=this.productoService.delete(id);
    return respuesta
    return"eliminado"+id }


@ApiOperation({summary:'producto guardado'})
@ApiResponse({status:201, description:'guarda nuevo producto creado'})
@Post()
funguardar(@Body()prod)
{
    let respuesta=this.productoService
    return respuesta
}

}
