import usersDao from "./users.dao";

class UsersService {
   async createUser(userData: any) {
      const user = await usersDao.createUser(userData);
      return user
   }

   async getUserById(id: any) {
      const user = await usersDao.getUserById(id)
      return user
   }
}

export default new UsersService();