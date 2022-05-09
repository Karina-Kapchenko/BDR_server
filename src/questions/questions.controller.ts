import express from "express";
import questionsService from "./questions.service";

class QuestionsController {
  async createQuestion(req: express.Request, res: express.Response) {
    try {
      const question = await questionsService.createQuestion(req.body);
      res.status(200).json(question);
    } catch (error) {}
  }

  async getAllQuestions(req: express.Request, res: express.Response) {
    try {
      const questions = await questionsService.getAllQuestions();
      res.status(200).json(questions);
    } catch (error) {}
  }

  async getQuestionById(req: express.Request, res: express.Response) {
    try {
      const question = await questionsService.getQuestionById(req.params.id);
      res.status(200).json(question);
    } catch (error) {}
  }
}

export default new QuestionsController();
