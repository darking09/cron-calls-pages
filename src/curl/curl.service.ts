import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';

const { CURL_URL = 'https://google.com' } = process.env;

@Injectable()
export class CurlService {
  constructor(private httpService: HttpService) {}

  async fetchCurlData(): Promise<AxiosResponse<any, any> | undefined> {
    const response = await this.httpService.axiosRef.get(CURL_URL);

    if (response.status !== 200) {
      throw new Error('Failed to fetch data');
    }

    return response;
  }
}
