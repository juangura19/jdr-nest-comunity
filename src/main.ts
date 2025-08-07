import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/community')
  app.enableCors({
    origin: [
      'http://localhost:4200', // Angular local
      'https://gentle-glacier-0912d220f.2.azurestaticapps.net'  // si tienes prod
    ],
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true
  })
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
