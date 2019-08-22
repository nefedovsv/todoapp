import {
  Controller,
  Param,
  Post,
  Body,
  Get,
  Delete,
  Put,
  UseGuards,
  Headers,
} from '@nestjs/common';
import { TodoDto } from './dto/todo.dto';
import { TodoService } from './todo.service';
import { ITodo } from './interfaces/todo.interface';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../auth/auth.service';
@Controller('api')
export class TodoController {
  constructor(
    private readonly todoService: TodoService,
    private readonly authService: AuthService,
  ) {}
  @Post('token')
  async login(@Body('data') userName: string) {
    return this.authService.login(userName);
  }
  @UseGuards(AuthGuard('jwt'))
  @Post('users')
  create(@Body() createTodoDto: TodoDto): Promise<ITodo> {
    return this.todoService.create(createTodoDto);
  }
  @UseGuards(AuthGuard('jwt'))
  @Get('users')
  findAll(@Headers('userdata') userName: string): Promise<ITodo[]> {
    return this.todoService.findAll(userName);
  }
  @UseGuards(AuthGuard('jwt'))
  @Delete('users/:id')
  delite(@Param('id') id: string): Promise<ITodo[]> {
    return this.todoService.delite(id);
  }
  @UseGuards(AuthGuard('jwt'))
  @Put('users')
  update(
    @Body('id') id: string,
    @Body('completed') completed: boolean,
  ): Promise<ITodo[]> {
    return this.todoService.update(id, completed);
  }
}
