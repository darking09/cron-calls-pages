import { Test, TestingModule } from '@nestjs/testing';
import { HttpService } from '@nestjs/axios';
import { CurlService } from './curl.service';
import { AxiosResponse } from 'axios';

describe('CurlService', () => {
  let httpService: HttpService;

  it('should be defined', async () => {
    const response = {} as AxiosResponse;

    httpService = {
      axiosRef: {
        get: jest.fn().mockResolvedValue(response),
      },
    } as unknown as HttpService;

    const service = await getCurlService(httpService);

    expect(service).toBeDefined();
  });

  it('should fetchCurlData', async () => {
    const response = {
      status: 200,
      data: 'data',
    } as AxiosResponse;

    httpService = {
      axiosRef: {
        get: jest.fn().mockResolvedValue(response),
      },
    } as unknown as HttpService;

    const service = await getCurlService(httpService);

    expect(await service.fetchCurlData()).toBe(response);
  });

  it('should throw an error if fetchCurlData fails', async () => {
    httpService = {
      axiosRef: {
        get: jest.fn().mockRejectedValue(new Error('Failed to fetch data')),
      },
    } as unknown as HttpService;

    const service = await getCurlService(httpService);

    await expect(service.fetchCurlData()).rejects.toThrowError(
      'Failed to fetch data',
    );
  });

  it('should throw an error if the status is different to 200', async () => {
    const response = {
      status: 500,
    } as AxiosResponse;

    httpService = {
      axiosRef: {
        get: jest.fn().mockResolvedValue(response),
      },
    } as unknown as HttpService;

    const service = await getCurlService(httpService);

    await expect(service.fetchCurlData()).rejects.toThrowError(
      'Failed to fetch data',
    );
  });
});

async function getCurlService(httpService: HttpService) {
  const module: TestingModule = await Test.createTestingModule({
    providers: [
      CurlService,
      {
        provide: HttpService,
        useValue: httpService,
      },
    ],
  }).compile();

  const service = module.get<CurlService>(CurlService);

  return service;
}
