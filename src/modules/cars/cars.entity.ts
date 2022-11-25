import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Cars extends Model<Cars> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  vehicleName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  vehicleType: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  vehiclePrice: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  vehicleHP: string;
}
