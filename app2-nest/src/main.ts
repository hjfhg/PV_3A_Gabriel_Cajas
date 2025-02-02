import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3000,()=>{
    console.log("levantado el servidor en http://127.0.0.1:4200")
  });
}
bootstrap();
