import User from "./User.model";

class UsersDao {
   async createUser(userData: any) {
      const user = await User.create(userData);
      return user
   }
   
   async getUserById(id: any) {
      const user = await User.findByPk(id);
      return user
   }
}

export default new UsersDao();