import { Controller, All, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @All('*')
  getRedirectToMDSDigital(@Res() res: Response) {
    res.redirect(302, 'https://mdsdigital.com');
  }
}
