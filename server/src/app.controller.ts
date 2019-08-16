import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth/auth.service';

@Controller('api')
export class AppController {
  constructor(private readonly authService: AuthService) {}
  @Post('token')
  async login(@Body('data') userName: string) {
    return this.authService.login(userName);
  }
}
