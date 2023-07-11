import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// entry point of Nestjs
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
