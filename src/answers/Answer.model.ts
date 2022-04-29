import { DataTypes, Model } from "sequelize";
import sequelize from '../config/db.config';

interface AnswerAttributes {
   id: number;
   siteId: number;
   questionNumber: string;
   mark: string;
}

interface AnswerCreationAttributes {
   siteId: number;
   questionNumber: string;
   mark: string;
}

export interface AnswerInstance extends Model<AnswerAttributes, AnswerCreationAttributes> {
   createdAt: string;
   updatedAt: string;
}

const Answer = sequelize.define<AnswerInstance>('Answers', {
   id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      autoIncrement: true,
      allowNull: false
   }, 
   siteId: {
      type: DataTypes.INTEGER,
      allowNull: false
   },
   questionNumber: {
      type: DataTypes.INTEGER,
      allowNull: false
   },
   mark: {
      type: DataTypes.INTEGER,
      allowNull: false
   }
})

export default Answer