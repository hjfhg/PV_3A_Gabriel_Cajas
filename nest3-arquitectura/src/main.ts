import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //class validator
  app.useGlobalPipes(new ValidationPipe({
    disableErrorMessages:true,
    }));

  // end class validator

  //swagger
  const config= new DocumentBuilder()
  .setTitle('Productos')
  .setDescription('Descripcion de productos desde la api productos')
  .setVersion('1.0')
  .addTag('Productos')
  .build()
  const document = SwaggerModule.createDocument(app,config)
  SwaggerModule.setup('api',app,document)

  // end swagger
  await app.listen(3000);
}
bootstrap();
