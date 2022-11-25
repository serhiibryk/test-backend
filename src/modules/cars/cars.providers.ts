import { CARS_REPOSITORY } from 'src/core/constants';
import { Cars } from './cars.entity';

export const carsProviders = [
  {
    provide: CARS_REPOSITORY,
    useValue: Cars,
  },
];
