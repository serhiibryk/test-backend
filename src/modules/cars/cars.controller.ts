import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Post('create')
  async create(@Body() cars) {
    return await this.carsService.create(cars);
  }

  @Get(':id')
  async getCarByID(@Param('id') carId) {
    return await this.carsService.findOneById(carId);
  }

  @Post('name')
  async findOneByName(@Body('name') carName) {
    return await this.carsService.findOneByName(carName);
  }

  @Delete(':id')
  async removeOneById(@Param('id') carId) {
    return await this.carsService.removeOneById(carId);
  }
}
