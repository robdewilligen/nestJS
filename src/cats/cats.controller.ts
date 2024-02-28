import {
    BadRequestException,
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Put,
    UsePipes
} from "@nestjs/common";
import { UpdateCatDto } from "./dto/update-cat.dto";
import { CatsService } from "./cats.service";
import { Cat } from "./interfaces/cat.interface";
import { CreateCatDto } from "./dto/create-cat.dto";
import { ZodValidationPipe } from "../pipes/zod-validation.pipes";
import { createCatSchema } from "./schema/create-cats.schema";

@Controller("cats")
export class CatsController {
    // Declare and initialize catsService
    constructor(private catsService: CatsService) {
    }
    
    // POST request to create a new Cat
    @Post()
    @UsePipes(new ZodValidationPipe(createCatSchema))
    async create(@Body() createCatDto: CreateCatDto) {
        this.catsService.create(createCatDto);
    }
    
    // GET request to find all the cats
    @Get()
    async findAll(): Promise<Cat[]> {
        throw new BadRequestException("Something bad happened", {
            cause: new Error(),
            description: "Some error description"
        });
    }
    
    // GET request to find a specific cat with an id
    @Get(":id")
    async findOne(@Param("id", ParseIntPipe) id: number) {
        return this.catsService.findOne(id);
    }
    
    // PUT request to alter a cat with id
    @Put(":id")
    update(@Param("id") id: string, @Body() updateCatDto: UpdateCatDto) {
        return `This action updates a #${id} cat`;
    }
    
    // DELETE request to delete a specific cat with id
    @Delete(":id")
    remove(@Param("id") id: string) {
        return `This action removes a #${id} cat`;
    }
}
