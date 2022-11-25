import { Module } from '@nestjs/common';
import { CarsService } from './cars.service';
import { carsProviders } from './cars.providers';
import { CarsController } from './cars.controller';

@Module({
  providers: [CarsService, ...carsProviders],
  exports: [CarsService],
  controllers: [CarsController],
})
export class CarsModule {}
