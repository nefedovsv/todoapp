import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import config from './todo/config/keys';
import { TodoModule } from './todo/todo.module';
@Module({
  imports: [
    TodoModule,
    AuthModule,
    MongooseModule.forRoot(config.mongoURI, { useNewUrlParser: true }),
  ],
  controllers: [AppController],
})
export class AppModule {}
