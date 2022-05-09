import { CommonRoutesConfig } from "../common/common.routes.config";
import express from "express";
import questionsController from "./questions.controller";

export class QuestionsRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, "QuestionsRoutes");
  }

  configureRoutes(): express.Application {
      this.app.route('/api/questions').post(questionsController.createQuestion).get(questionsController.getAllQuestions);

      this.app.route('/api/questions/:id').get(questionsController.getQuestionById)
    return this.app;
  }
}
