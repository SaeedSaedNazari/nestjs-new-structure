import { Controller, Get } from '@nestjs/common';
import { AppService } from '../service/app.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('/')
@Controller('/')
export class AppController {
  constructor(private readonly service: AppService) {}

  @Get()
  sayHi(): string {
    return this.service.sayHi();
  }
}
