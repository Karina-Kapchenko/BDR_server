import express from "express";
import usersService from "./users.service";
class UsersController {
  async createUser(req: express.Request, res: express.Response) {
    try {
      const user = await usersService.createUser(req.body);
      res.status(200).json(user);
    } catch (error) {}
  }

  async getUserById(req: express.Request, res: express.Response) {
    try {
      const user = await usersService.getUserById(req.params.id);
      res.status(200).json(user);
    } catch (error) {}
  }
}

export default new UsersController();
