import express from 'express';
import usersService from './users.service';
class UsersController {
   async createUser(req: express.Request, res: express.Response) {
      const user = await usersService.createUser(req.body);
      res.status(200).json(user)
   }

   async getUserById(req: express.Request, res: express.Response) {
      const user = await usersService.getUserById(req.params.id)
      res.status(200).json(user)
   }
}

export default new UsersController();