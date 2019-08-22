"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const todo_dto_1 = require("./dto/todo.dto");
const todo_service_1 = require("./todo.service");
const passport_1 = require("@nestjs/passport");
const auth_service_1 = require("../auth/auth.service");
let TodoController = class TodoController {
    constructor(todoService, authService) {
        this.todoService = todoService;
        this.authService = authService;
    }
    async login(userName) {
        return this.authService.login(userName);
    }
    create(createTodoDto) {
        return this.todoService.create(createTodoDto);
    }
    findAll(userName) {
        return this.todoService.findAll(userName);
    }
    delite(id) {
        return this.todoService.delite(id);
    }
    update(id, completed) {
        return this.todoService.update(id, completed);
    }
};
__decorate([
    common_1.Post('token'),
    __param(0, common_1.Body('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "login", null);
__decorate([
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Post('users'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [todo_dto_1.TodoDto]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "create", null);
__decorate([
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Get('users'),
    __param(0, common_1.Headers('userdata')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "findAll", null);
__decorate([
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Delete('users/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "delite", null);
__decorate([
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.Put('users'),
    __param(0, common_1.Body('id')),
    __param(1, common_1.Body('completed')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Boolean]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "update", null);
TodoController = __decorate([
    common_1.Controller('api'),
    __metadata("design:paramtypes", [todo_service_1.TodoService,
        auth_service_1.AuthService])
], TodoController);
exports.TodoController = TodoController;
//# sourceMappingURL=todo.controller.js.map