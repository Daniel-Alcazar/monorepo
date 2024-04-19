import { NestFactory } from '@nestjs/core';
import { MicroAppModule } from './micro_app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  //const app = await NestFactory.create(MicroAppModule);
  //await app.listen(3000);
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    MicroAppModule,
    {
      transport: Transport.REDIS,
      options: {
        host: 'localhost',
        port: 6379,
      },
    },
  );
  await app.listen();
}
bootstrap();
