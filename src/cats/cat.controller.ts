import { Controller, Get, Post, Put, Delete, Req, Param, Body, Query} from '@nestjs/common';
import { CreateCatDto, UpdateCatDto,ListAllEntities } from './dto/dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatController {
    constructor(private catsService: CatsService) {}
    @Get()
    async findAll(@Query() query: ListAllEntities): Promise<Cat[]> {
        return this.catsService.findAll();
    }
    @Get(':name')
    findOne(@Param() params): string {
        return `[FINDONE] : This action returns a ${params.name} cat`;
    }
    @Post()
    async create(@Body() createCatDto: CreateCatDto): Promise<string> {
        return `[CREATE] : This action adds a new cat ${createCatDto.name}` ;
    }
    @Put(':id')
    async update(@Param('id') id:string, @Body() updateCatDto: UpdateCatDto): Promise<string>{
        return `[UPDATE] : This action update a item ${id}`;
    }
    @Delete(":id")
    async remove(@Param('id') id:string) {
        return `[REMOVE] : This Action remoce item ${id}`;
    }
}
