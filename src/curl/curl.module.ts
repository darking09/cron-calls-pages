import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { CurlService } from './curl.service';

@Module({
  imports: [HttpModule],
  exports: [CurlService],
  providers: [CurlService],
})
export class CurlModule {}
