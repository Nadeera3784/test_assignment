import { DataTypes, Model, ModelStatic, Optional } from 'sequelize'
import sequelizeConnection from '../config'
import { Person } from './index'

interface StudentAttributes {
    id: number;
    person_id : number;
    student_number: string;
}

export interface StudentInput extends Optional<StudentAttributes, 'id'> {}

export interface StudentOuput extends Required<StudentAttributes> {}

class  Student extends Model<StudentAttributes, StudentInput> implements StudentAttributes {
    public id!: number;
    public person_id : number;
    public student_number: string;
}

Student.init({
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
    student_number: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING(100)
    }
}, {
  sequelize: sequelizeConnection,
  modelName: 'vehicle',
  tableName: "vehicle",
  timestamps: false
});

Student.belongsTo(Person, {
    foreignKey: 'person_id',
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION'
})

export default Student