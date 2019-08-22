import { TodoDto } from './dto/todo.dto';
import { TodoService } from './todo.service';
import { ITodo } from './interfaces/todo.interface';
import { AuthService } from '../auth/auth.service';
export declare class TodoController {
    private readonly todoService;
    private readonly authService;
    constructor(todoService: TodoService, authService: AuthService);
    login(userName: string): Promise<{
        access_token: string;
    }>;
    create(createTodoDto: TodoDto): Promise<ITodo>;
    findAll(userName: string): Promise<ITodo[]>;
    delite(id: string): Promise<ITodo[]>;
    update(id: string, completed: boolean): Promise<ITodo[]>;
}
