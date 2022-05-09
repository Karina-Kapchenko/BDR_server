import User from "./User.model";

class UsersDao {
  async createUser(userData: any) {
    try {
      const user = await User.create(userData);
      return user;
    } catch (error) {
      console.log(error);
    }
  }

  async getUserById(id: any) {
    try {
      const user = await User.findByPk(id);
      return user;
    } catch (error) {
      throw error;
    }
  }

  async getUserByEmail(email: any) {
    try {
      const user = await User.findOne({
        where: {
          email,
        },
      });
      return user;
    } catch (error) {
      throw error;
    }
  }
}

export default new UsersDao();
