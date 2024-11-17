import { Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Query, UseGuards } from '@nestjs/common';
import { ValidateAuthPipe } from './pipe/validate-auth/validate-auth.pipe';
import { AuthGuard } from './guards/auth/auth.guard';


@Controller('auth')
export class AuthController {

    @Get('/notfound')
    @HttpCode(404)
    notfound() {
        return '404 page not foud'
    }

    @Get('/errorRoute')
    @HttpCode(500)
    errorPage() {
        return 'Error route'
    }

    @Get("/ticket/:num")
    getNumber(@Param('num', ParseIntPipe) num: number) {
        return num + 14;
    }

    @Get("/Active/:status")
    getStatus(@Param('status', ParseBoolPipe) status: boolean) {
        return status;
    }

    @Get('greet')
    @UseGuards(AuthGuard)
    greet(@Query(ValidateAuthPipe) query: { name: string, age: number }) {
        console.log(query.name);
        return `Hello ${query.name}`;
    }
}

