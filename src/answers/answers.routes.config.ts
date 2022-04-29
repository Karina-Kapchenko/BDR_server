import { CommonRoutesConfig } from "../common/common.routes.config";
import express from "express";
import answersController from "./answers.controller";

export class AnswersRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, "AnswersRoutes");
  }

  configureRoutes(): express.Application {
      this.app.route('/answer').post(answersController.createAnswer)
      this.app.route('/answer/site/:siteId').get(answersController.getAllSiteAnswers)

      this.app.route('/answer/:id').get(answersController.getAnswerById)
    return this.app;
  }
}
