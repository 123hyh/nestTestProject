import { Controller, Get, Param, Header, HttpCode,Body, Post } from '@nestjs/common';
import { UserService } from './user.service'

class CreateData {
    readonly uid: string;
    readonly name: string
}
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}
    @Get('/')
    findList(): string {
        return this.userService.handlerUser('1')
    }
    @Get(':id')
    @Header('x-auth-token','995')
    @HttpCode(204)
    findOne(@Param() { id }:{ id:string }): any {
        return  this.userService.handlerOne(id)
    }
    @Post('/password')
    findPassword(@Body() createData: CreateData){
        return {password: createData.uid}
    }
}
