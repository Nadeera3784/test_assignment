import { DataTypes, Model, ModelStatic, Optional } from 'sequelize'
import sequelizeConnection from '../config'
import { Person } from './index'

interface VehicleAttributes {
    id: number;
    person_id : number,
    model: string;
    plate_number: string;
}

export interface VehicleInput extends Optional<VehicleAttributes, 'id'> {}

export interface VehicleOuput extends Required<VehicleAttributes> {}

class  Vehicle extends Model<VehicleAttributes, VehicleInput> implements VehicleAttributes {
    public id!: number;
    public person_id : number;
    public model: string;
    public plate_number: string;
}

Vehicle.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    person_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: Person,
            key: 'id'
        }
    },
    model: {
        allowNull: false,
        type: DataTypes.STRING(255)
    },
    plate_number: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING(255)
    }
}, {
  sequelize: sequelizeConnection,
  modelName: 'vehicle',
  tableName: "vehicle",
  timestamps: false
});

Vehicle.belongsTo(Person, {
    foreignKey: 'person_id',
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION'
})

export default Vehicle