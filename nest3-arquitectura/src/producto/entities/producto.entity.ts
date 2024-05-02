import { Column, Entity,PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class producto{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    nombre: string;

    @Column()
    precio: number;

    @Column()
    cantidad:number;

}