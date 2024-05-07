import { IsNotEmpty } from "class-validator";

export class CreateProductoDto{
    @IsNotEmpty()
    readonly nombre: string;
    @IsNotEmpty()
    readonly precio: number;
    @IsNotEmpty()
    readonly cantidad: number;
    @IsNotEmpty()
    readonly imagen: string;
    readonly descripcion: string;
}