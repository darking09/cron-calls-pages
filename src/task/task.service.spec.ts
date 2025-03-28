import { Test, TestingModule } from '@nestjs/testing';
import { TaskService } from './task.service';
import { CurlService } from '../curl/curl.service';

describe('TaskService', () => {
  let service: TaskService;
  let curlService: CurlService;

  it('should be defined', async () => {
    curlService = {
      fetchCurlData: jest.fn(),
      httpService: {
        // Mock any methods or properties of HttpService as needed
      },
    } as unknown as CurlService;
    service = await getTaskService(curlService);
    expect(service).toBeDefined();
  });
});

async function getTaskService(curService: CurlService): Promise<TaskService> {
  const module: TestingModule = await Test.createTestingModule({
    providers: [
      TaskService,
      {
        provide: CurlService,
        useValue: curService,
      },
    ],
  }).compile();

  return module.get<TaskService>(TaskService);
}
