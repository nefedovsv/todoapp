import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { TodoSchema } from './schemas/todo.schemas';
import { AuthModule } from '../auth/auth.module';
@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([{ name: 'Todo', schema: TodoSchema }]),
  ],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
