import usersService from "../users/users.service";

class AuthService {
  async login(loginData: any) {
    try {
      const existUser = await usersService.getUserByEmail(loginData.email);

      if (!existUser) {
        throw new Error("Користувача не існує");
      }

      const userData = existUser.get();

      if (loginData.password !== userData.password) {
        throw new Error("Невірний пароль");
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
        throw new Error("Користувач вже існує");
      }
      const user = await usersService.createUser(registerData);

      return user;
    } catch (error) {
      throw error;
    }
  }
}

export default new AuthService();
