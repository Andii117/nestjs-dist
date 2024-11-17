import { MiddlewareConsumer, Module, NestModule, Req, RequestMethod } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { LoggerMiddleware } from './logger/logger.middleware';


@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule implements NestModule {

  configure(consumer: MiddlewareConsumer) {
    //consumer.apply(LoggerMiddleware).forRoutes('users'); ->Se usa para todas las rutas
    //Ejeruta el middlewarer en turas especificas
    consumer.apply(LoggerMiddleware).forRoutes(
      { path: '/users', method: RequestMethod.GET },
      { path: '/users', method: RequestMethod.POST }
    )
    //para anexar mas middleware con .apply al final y ejecuta.
  }
}
