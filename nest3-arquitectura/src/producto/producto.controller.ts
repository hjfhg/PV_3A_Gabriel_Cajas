import { Body, Controller, Get, Post, Param, Put, Delete} from '@nestjs/common';
import { ProductoService } from './producto.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateProductoDto } from './dto/create-producto.dto';

@ApiTags('CRUD API Productos')
@Controller('producto')



export class ProductoController {


constructor(private productoService:ProductoService){}

//DECORADOR GET
@ApiOperation({summary:'Obtener lista de Productos'})
@ApiResponse({status:200,description:'retorna lista de producos'})


@Get()
funListar(){
    let productos=this.productoService.findAll()
    return productos
}

//DECORADOR POST

@ApiOperation({summary:'Guardar Nuevo producto'})
@ApiResponse({status:201,description:'guarda un nuevo producto'})


@Post()
funGuardar(@Body()prod){
    let respuesta=this.productoService.create(prod);
    return respuesta
}

@ApiOperation({summary:'Mostrar un nuevo Producto'})
@ApiResponse({status:201,description:'Muestra un nuevo producto'})


@Get(":id")
funmostar(@Param("id")id){
    return "Mostrando.."+id;
}

@ApiOperation({summary:'Corta un nuevo Producto'})
@ApiResponse({status:201,description:'Corta un nuevo producto'})


@Put(":id")
funmodificar(@Param("id")id,@Body()prod)
{
    let respuesta=this.productoService.update(id,prod);
    return respuesta
}

@ApiOperation({summary:'Elimina un nuevo Producto'})
@ApiResponse({status:201,description:'Elimina un nuevo producto'})


@Delete(":id")
funeliminar(@Param("id")id)
{
    let respuesta=this.productoService.delete(id);
    return respuesta
    return"eliminado"+id }

    @ApiOperation({summary:'Crear un nuevo Producto'})
    @ApiResponse({status:201,description:'Registra un nuevo producto'})

 
@Post()
funguardar(@Body() prod:CreateProductoDto){
    let respuesta=this.productoService
    return respuesta;
}

}
