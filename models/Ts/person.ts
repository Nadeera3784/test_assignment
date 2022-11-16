import { DataTypes, Model, ModelStatic, Optional } from 'sequelize'
import sequelizeConnection from '../config'

interface PersonAttributes {
    id: number;
    name: string;
}

export interface PersonInput extends Optional<PersonAttributes, 'id'> {}

export interface PersonOuput extends Required<PersonAttributes> {}

class  Person extends Model<PersonAttributes, PersonInput> implements PersonAttributes {
    public id!: number
    public name: string
}

Person.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING(50)
    }
}, {
  sequelize: sequelizeConnection,
  modelName: 'person',
  tableName: "person",
  timestamps: false
})

export default Person