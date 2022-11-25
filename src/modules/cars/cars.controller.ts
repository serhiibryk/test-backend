import { Body, Controller, Post } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Post('createNewCar')
  async create(@Body() cars) {
    return await this.carsService.create(cars);
  }
}
