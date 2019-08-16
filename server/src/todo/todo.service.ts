import { Injectable } from '@nestjs/common';
import { ITodo } from './interfaces/todo.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class TodoService {
  constructor(
    @InjectModel('Todo')
    private readonly todoModel: Model<ITodo>,
  ) {}
  async create(item: ITodo): Promise<ITodo> {
    const newTodo = new this.todoModel(item);
    return await newTodo.save();
  }
  async findAll(name: string): Promise<ITodo[]> {
    return await this.todoModel.find({ userName: name });
  }
  async delite(id: string): Promise<ITodo[]> {
    return await this.todoModel.findByIdAndDelete(id);
  }
  async update(id: string, compl: boolean): Promise<ITodo[]> {
    return await this.todoModel.findOneAndUpdate(
      { _id: id },
      { $set: { completed: compl } },
      { new: true },
    );
  }
}
