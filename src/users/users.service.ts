import usersDao from "./users.dao";

class UsersService {
  async createUser(userData: any) {
    try {
      const user = await usersDao.createUser(userData);
      return user;
    } catch (error) {
      throw error;
    }
  }

  async getUserById(id: any) {
    try {
      const user = await usersDao.getUserById(id);
      return user;
    } catch (error) {
      throw error;
    }
  }

  async getUserByEmail(email: string) {
    try {
      const user = await usersDao.getUserByEmail(email);
      return user;
    } catch (error) {
      throw error;
    }
  }
}

export default new UsersService();
