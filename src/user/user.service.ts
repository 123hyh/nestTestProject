import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    handlerUser<T>(data: T): T{
        return data
    }
    handlerOne<T>(data: T): {id: T}{
        return {id: data}
    }
}
