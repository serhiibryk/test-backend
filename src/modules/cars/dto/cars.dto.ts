import { IsNotEmpty } from 'class-validator';

export class CarsDto {
  @IsNotEmpty()
  readonly vehicleName: string;

  @IsNotEmpty()
  readonly vehicleType: string;

  @IsNotEmpty()
  readonly vehiclePrice: string;

  @IsNotEmpty()
  readonly vehicleHP: string;
}
