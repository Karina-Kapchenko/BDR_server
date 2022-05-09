import usersService from "../users/users.service";

class AuthService {
  async login(loginData: any) {
    try {
      const existUser = await usersService.getUserByEmail(loginData.email);

      if (!existUser) {
        throw new Error("USER_NOT_EXIST");
      }

      const userData = existUser.get();

      if (loginData.password !== userData.password) {
        throw new Error("INVALID_PASSWORD");
      }

      return existUser;
    } catch (error) {
      throw error;
    }
  }

  async register(registerData: any) {
    try {
      const existUser = await usersService.getUserByEmail(registerData.email);

      if (existUser) {
        throw new Error("USER_ALREADY_EXIST");
      }
      const user = await usersService.createUser(registerData);

      return user;
    } catch (error) {
      throw error;
    }
  }
}

export default new AuthService();
