import express from 'express';
import questionsService from './questions.service';

class QuestionsController {
   async createQuestion(req: express.Request, res: express.Response) {
      const question = await questionsService.createQuestion(req.body)
      res.send(200).json(question)
   }
   
   async getAllQuestions(req: express.Request, res: express.Response) {
      const questions = await questionsService.getAllQuestions()
      res.send(200).json(questions)
   }
   
   async getQuestionById(req: express.Request, res: express.Response) {
      const question = await questionsService.getQuestionById(req.params.id)
      res.send(200).json(question)
   }

}

export default new QuestionsController();