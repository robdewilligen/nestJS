import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { DogsModule } from "./dogs/dogs.module";
import { CatsController } from "./cats/cats.controller";

@Module({
    imports: [DogsModule],
    controllers: [AppController, CatsController],
    providers: [AppService]
})
export class AppModule {
}
