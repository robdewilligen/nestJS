import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { DogsModule } from "./dogs/dogs.module";
import { CatsModule } from "./cats/cats.module";
import { logger } from "./middleware/logger.middleware";

@Module({
    imports: [DogsModule, CatsModule],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer): any {
        consumer
            // Apply the "LoggerMiddleware" to the GET method of the "cats" route
            .apply(logger)
            .exclude({ path: "cats", method: RequestMethod.POST },
                { path: "cats", method: RequestMethod.PUT }
            )
            .forRoutes({ path: "cats", method: RequestMethod.GET });
        /*  You are able to use  wildcard characters in the path ?, +, () and * can be used
         *  The - and . are used literally
         *  The forRoutes() function can take a couple options:
         *      a single string,
         *      multiple strings,
         *      a RouteInfo object,
         *      a controller class,
         *      multiple controller classes.
         */
    }
}
