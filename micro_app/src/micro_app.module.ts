import { Module } from '@nestjs/common';
import { MicroAppController } from './micro_app.controller';
import { MicroAppService } from './micro_app.service';

@Module({
  imports: [],
  controllers: [MicroAppController],
  providers: [MicroAppService],
})
export class MicroAppModule {}
