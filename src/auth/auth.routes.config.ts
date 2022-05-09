import { CommonRoutesConfig } from "../common/common.routes.config";
import express from "express";
import authController from "./auth.controller";

export class AuthRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, "AuthRoutes");
  }

  configureRoutes(): express.Application {
    this.app.route(`/api/login`).post(authController.login);

    this.app.route(`/api/register`).post(authController.register);
    return this.app;
  }
}
