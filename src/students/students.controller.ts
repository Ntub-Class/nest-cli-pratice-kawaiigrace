import { Controller, Get, Param, Post, Body, Delete, Put } from '@nestjs/common';
import { StudentsService } from './service/students.service';

@Controller('students')
export class StudentsController {
    constructor(private readonly appService: StudentsService) {}
    @Get()
    getAll(): string {
        return 'Get all ok';
    }
    @Get(':id')
    getOne(@Param('id') id) {
        return 'Get one ok';
    }
    @Post()
    postUser(@Body() body) {
        return 'Post all ok';
    }
    @Put(':id')
    putUser(@Body() bodyParser, @Param('id') id){
        return 'Put ok';
    }
    @Delete(':id')
    deleteUser(@Param('id') id) {
        return 'Delete ok';
    }
}
