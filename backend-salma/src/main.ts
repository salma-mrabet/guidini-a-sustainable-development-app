import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';


// entry point of Nestjs
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  
  const config = new DocumentBuilder()
    .setTitle('Guidini')
    .setDescription('Guidini API description')
    .setVersion('1.0')
    .addTag('Guidini')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

    // Configure CORS options
    const corsOptions: CorsOptions = {
      origin: 'http://localhost:3001',
      // Add any other CORS options as needed
    };
  
    app.enableCors(corsOptions);

  await app.listen(process.env.PORT);
}
bootstrap();
