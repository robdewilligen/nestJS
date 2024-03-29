import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { logger } from "./middleware/logger.middleware";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());
    app.use(logger);
    await app.listen(3000);
}

bootstrap();
