import { Logger } from '@nestjs/common';
const { CRON_ENABLED = 'false' } = process.env;

export function IsEnabledCron(): MethodDecorator {
  return (
    target: object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor,
  ) => {
    const originalMethod = descriptor.value as (...args: any[]) => any;

    descriptor.value = function (...args: any[]): any {
      const logger = new Logger();
      logger.debug(`Checking if cron is enabled`);

      if (CRON_ENABLED === 'true') {
        logger.debug(`Cron is enabled`);
        originalMethod.apply(this, args);
        return originalMethod;
      } else {
        logger.debug(`Cron is disabled`);
      }
    };
    return descriptor;
  };
}
