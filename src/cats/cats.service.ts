import { Injectable, Param } from "@nestjs/common";
import { Cat } from "./interfaces/cat.interface";

@Injectable()
export class CatsService {
    private readonly cats: Cat[] = [];
    
    create(cat: Cat) {
        this.cats.push(cat);
    }
    
    findAll(): Cat[] {
        return this.cats;
    }
    
    findOne(@Param() params: any): string {
        console.log(params.id);
        return `This action returns a #${params.id} cat`;
    }
    
}