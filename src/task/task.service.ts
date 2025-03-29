import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { CurlService } from '../curl/curl.service';

import { IsEnabledCron } from './decorator/isEnabledCron.decorator';

// run every minute
const { TASK_CRON = '* * * * *' } = process.env;

@Injectable()
export class TaskService {
  private readonly logger = new Logger(TaskService.name);

  constructor(private curlService: CurlService) {}

  @Cron(TASK_CRON, {
    name: 'curl-task',
    timeZone: 'America/Bogota',
  })
  @IsEnabledCron()
  async handleCron() {
    await this.curlService.fetchCurlData();

    this.logger.debug('Called when the cron job is triggered');
  }
}
