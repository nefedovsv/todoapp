import { ITodo } from './interfaces/todo.interface';
import { Model } from 'mongoose';
export declare class TodoService {
    private readonly todoModel;
    constructor(todoModel: Model<ITodo>);
    create(item: ITodo): Promise<ITodo>;
    findAll(name: string): Promise<ITodo[]>;
    delite(id: string): Promise<ITodo[]>;
    update(id: string, compl: boolean): Promise<ITodo[]>;
}
