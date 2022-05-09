import express from 'express';
import authService from './auth.service';

class AuthController {
   async login(req: express.Request, res: express.Response) {
      try {
         const loginResult = await authService.login(req.body)
         res.status(200).json(loginResult)
      } catch (error) {
         
      }
   }

   async register(req: express.Request, res: express.Response) {
      try {
         const registerResult = await authService.register(req.body)
         res.status(200).json(registerResult)   
      } catch (error) {
         
      }
   }

}

export default new AuthController();