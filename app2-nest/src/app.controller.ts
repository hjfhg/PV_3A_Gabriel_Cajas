import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get("\producto")
  misproductos(){
    return "lista de productos"
  }
  
  @Get("/productos")
  funListaProductos(){
    let productos=this.appService.getListaProductos();
    return productos;
  }
}
