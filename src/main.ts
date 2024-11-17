import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Adiciona a la app todas las validaciones
  app.useGlobalPipes(new ValidationPipe(
    {
      whitelist: true, //con esta propiedad no admite campos en la entrada que no se encuentren en el DTO
    }
  ));
  const config = new DocumentBuilder()
    .setTitle('Nest Documentation Swwagger')
    .setDescription('The APIs descriptions')
    .setVersion('1.0')
    .addTag('Nest App')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('NestDoc', app, documentFactory);

  app.enableCors({
    origin:"http://lcoalhost:4200"
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
