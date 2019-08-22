import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import config from './todo/config/keys';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    TodoModule,
    AuthModule,
    MongooseModule.forRoot(config.mongoURI, { useNewUrlParser: true }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../', 'build'),
    }),
  ],
})
export class AppModule {}
