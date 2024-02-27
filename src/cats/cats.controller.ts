import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateCatDto } from "./dto/create-cat.dto";
import { UpdateCatDto } from "./dto/update-cat.dto";

@Controller("cats")
export class CatsController {
    @Post()
    create(@Body() createCatDto: CreateCatDto): string {
        return "This action adds a new cat";
    }
    
    @Get()
    findAll(): string {
        return "This action returns all cats";
    }
    
    @Get(":id")
    findOne(@Param() params: any): string {
        console.log(params.id);
        return `This action returns a #${params.id} cat`;
    }
    
    @Put(":id")
    update(@Param("id") id: string, @Body() updateCatDto: UpdateCatDto) {
        return `This action updates a #${id} cat`;
    }
    
    @Delete(":id")
    remove(@Param("id") id: string) {
        return `This action removes a #${id} cat`;
    }
}
