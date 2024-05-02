import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductoModule } from './producto/producto.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ProductoModule,TypeOrmModule.forRoot({
    type:'postgres',
    host:'localhost',
    username:'postgres',
    password: '12345',
    port:5432,
    database:'nest_app1',
    autoLoadEntities:true,
    synchronize:true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

