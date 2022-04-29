import { Sequelize } from "sequelize";


const sequelize: Sequelize = new Sequelize(
  'bakalavr',
  'postgres',
  'admin',
  {
    host: 'localhost',
    dialect: "postgres",
  }
);

export default sequelize;
