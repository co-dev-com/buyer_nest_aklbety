import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor (private _ConfigSerive: ConfigService) {}
  getHello(): string {
    return 'Hello World';
  }
}
