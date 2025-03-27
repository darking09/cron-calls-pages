import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CurlModule } from './curl/curl.module';
import { CurlModule } from './task/curl/curl.module';
import { TaskService } from './task/task.service';

@Module({
  imports: [CurlModule],
  controllers: [AppController],
  providers: [AppService, TaskService],
})
export class AppModule {}
