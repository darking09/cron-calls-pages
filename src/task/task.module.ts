import { Module } from '@nestjs/common';
import { CurlModule } from '../curl/curl.module';
import { TaskService } from './task.service';

@Module({
  imports: [CurlModule],
  providers: [TaskService],
  exports: [TaskService],
})
export class TaskModule {}
