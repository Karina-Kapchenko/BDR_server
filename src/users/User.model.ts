import { DataTypes, Model } from "sequelize";
import sequelize from '../config/db.config';

interface UserAttributes {
   id: number;
   name: string;
   email: string;
   password: string;
   role: number;
}

interface UserCreationAttributes {
   name: string;
   email: string;
   password: string;
   role: number;
}

export interface UserInstance extends Model<UserAttributes, UserCreationAttributes> {
   createdAt: string;
   updatedAt: string;
}

const User = sequelize.define<UserInstance>('users', {
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
   email: {
      type: DataTypes.TEXT,
      allowNull: false
   },
   password: {
      type: DataTypes.TEXT,
      allowNull: false
   },
   role: {
      type: DataTypes.INTEGER,
      allowNull: false
   }
})

export default User