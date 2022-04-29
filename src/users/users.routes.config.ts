import { CommonRoutesConfig } from "../common/common.routes.config";
import express from "express";
import usersController from "./users.controller";

export class UsersRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, "UsersRoutes");
  }

  configureRoutes(): express.Application {
    this.app.route(`/users`).post(usersController.createUser);

    this.app.route(`/users/:id`).get(usersController.getUserById);
    return this.app;
  }
}
