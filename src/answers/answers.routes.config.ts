import { CommonRoutesConfig } from "../common/common.routes.config";
import express from "express";
import answersController from "./answers.controller";

export class AnswersRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, "AnswersRoutes");
  }

  configureRoutes(): express.Application {
      this.app.route('/api/answer').post(answersController.createAnswer)
      this.app.route('/api/answer/site/:siteId').get(answersController.getAllSiteAnswers)

      this.app.route('/api/answer/site/:siteId/:questionNumber').get(answersController.getPropertyInfo)

      this.app.route('/api/answer/:id').get(answersController.getAnswerById)
    return this.app;
  }
}
