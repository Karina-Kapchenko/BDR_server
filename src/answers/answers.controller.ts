import express from 'express';
import answersService from './answers.service';

class AnswersController {
   async createAnswer(req: express.Request, res: express.Response) {
      const answer = await answersService.createAnswer(req.body)
      res.send(200).json(answer)
   }

   async getAnswerById(req: express.Request, res: express.Response) {
      const answer = await answersService.getAnswerById(req.params.id)
      res.send(200).json(answer)
   }

   async getAllSiteAnswers(req: express.Request, res: express.Response) {
      const answers = await answersService.getAllSiteAnswers(req.params.siteId)
      res.send(200).json(answers)
   }
}

export default new AnswersController();