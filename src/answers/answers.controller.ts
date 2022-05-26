import express from "express";
import answersService from "./answers.service";

class AnswersController {
  async createAnswer(req: express.Request, res: express.Response) {
    try {
      const answer = await answersService.createAnswer(req.body);
      res.status(200).json(answer);
    } catch (error) {
       throw error
    }
  }

  async getAnswerById(req: express.Request, res: express.Response) {
    try {
      const answer = await answersService.getAnswerById(req.params.id);
      res.status(200).json(answer);
    } catch (error) {
       throw error
    }
  }

  async getAllSiteAnswers(req: express.Request, res: express.Response) {
    try {
      const answers = await answersService.getAllSiteAnswers(req.params.siteId);

      res.status(200).json(answers);
    } catch (error) {
       throw error
    }
  }

  async getPropertyInfo(req: express.Request, res: express.Response) {
    try {
      const propertyInfo = await answersService.getPropertyInfo(req.params.siteId, req.params.questionNumber);

      console.log(propertyInfo);

      res.status(200).json(propertyInfo);
    } catch (error) {
       throw error
    }
  }
}

export default new AnswersController();
