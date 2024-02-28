import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { DogsService } from "./dogs.service";
import { CreateDogDto } from "./dto/create-dog.dto";
import { UpdateDogDto } from "./dto/update-dog.dto";
import { ValidationPipe } from "../pipes/validation.pipe";

@Controller("dogs")
export class DogsController {
    constructor(private readonly dogsService: DogsService) {
    }
    
    @Post()
    async create(
        @Body(new ValidationPipe()) createDogDto: CreateDogDto
    ) {
        this.dogsService.create(createDogDto);
    }
    
    @Get()
    findAll() {
        return this.dogsService.findAll();
    }
    
    @Get(":id")
    findOne(@Param("id") id: string) {
        return this.dogsService.findOne(+id);
    }
    
    @Patch(":id")
    update(@Param("id") id: string, @Body() updateDogDto: UpdateDogDto) {
        return this.dogsService.update(+id, updateDogDto);
    }
    
    @Delete(":id")
    remove(@Param("id") id: string) {
        return this.dogsService.remove(+id);
    }
}
