import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const request = context.switchToHttp().getRequest() as Request;
    console.log(request.url)

    //Valida si en la cabecera tiene la propiedad autorizacion si no bloquea
    //if(!request.headers['Autorization']) return false;

    if(request.url === '/greet') return false;
    return true;
  }
}
