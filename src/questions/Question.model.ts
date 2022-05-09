import { DataTypes, Model } from "sequelize";
import sequelize from '../config/db.config';
import Answer from '../answers/Answer.model';

interface QuestionAttributes {
   id: number;
   name: string;
   link: string;
   description: string;
   passed_count: number
}

interface QuestionCreationAttributes {
   name: string;
   link: string;
   description: string;
}

export interface QuestionInstance extends Model<QuestionAttributes, QuestionCreationAttributes> {
   createdAt: string;
   updatedAt: string;
}

const Question = sequelize.define<QuestionInstance>('Questions', {
   id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      autoIncrement: true,
      allowNull: false
   }, 
   name: {
      type: DataTypes.TEXT,
      allowNull: false
   },
   link: {
      type: DataTypes.TEXT,
      allowNull: false
   },
   description: {
      type: DataTypes.TEXT,
      allowNull: true
   },
   passed_count: {
      type: DataTypes.INTEGER,
      defaultValue: 0
   }
})

Question.hasMany(Answer, {foreignKey: 'siteId', as: 'answer'})

export default Question

