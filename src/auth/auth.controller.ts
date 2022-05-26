import express from 'express';
import authService from './auth.service';

class AuthController {
   async login(req: express.Request, res: express.Response) {
      try {
         const loginResult = await authService.login(req.body)
         res.status(200).json({status: 1, data: loginResult})
      } catch (error: any) {
         res.status(200).json({status: 0,error: error.message})
      }
   }

   async register(req: express.Request, res: express.Response) {
      try {
         const registerResult = await authService.register(req.body)
         res.status(200).json({status: 1, data: registerResult})   
      } catch (error: any) {
         res.status(200).json({status: 0, error: error.message})
      }
   }

}

export default new AuthController();