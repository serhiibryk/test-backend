import { Injectable, Inject } from '@nestjs/common';
import { CARS_REPOSITORY } from '../../core/constants';
import { CarsDto } from './dto/cars.dto';
import { Cars } from './cars.entity';

@Injectable()
export class CarsService {
  constructor(
    @Inject(CARS_REPOSITORY)
    private readonly carsRepository: typeof Cars,
  ) {}

  async create(cars: CarsDto): Promise<Cars> {
    return await this.carsRepository.create<Cars>(cars);
  }

  async findOneByName(vehicleName: string): Promise<Cars> {
    return await this.carsRepository.findOne<Cars>({ where: { vehicleName } });
  }

  async findOneById(id: number): Promise<Cars> {
    return await this.carsRepository.findOne<Cars>({ where: { id } });
  }
}
