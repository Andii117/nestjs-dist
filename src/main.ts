import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Adiciona a la app todas las validaciones
  app.useGlobalPipes(new ValidationPipe(
    {
      whitelist: true, //con esta propiedad no admite campos en la entrada que no se encuentren en el DTO
    }
  ))
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
