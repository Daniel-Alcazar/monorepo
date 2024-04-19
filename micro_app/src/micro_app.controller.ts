import { Controller, Get } from '@nestjs/common';
import { MicroAppService } from './micro_app.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class MicroAppController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly microAppService: MicroAppService) {}

  //@Get()
  //getHello(): string {
  //  return this.microAppService.getHello();
  //}
  @EventPattern('new_micro')
  handleNewEmail(data:any){
    console.log('Esta es el mensaje entrante', data)
  }
}
