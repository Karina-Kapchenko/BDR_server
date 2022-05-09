import express from "express";
import * as http from "http";
import cors from "cors";
import { CommonRoutesConfig } from "./src/common/common.routes.config";
import { UsersRoutes } from "./src/users/users.routes.config";
import User from "./src/users/User.model";
import Question from "./src/questions/Question.model";
import { QuestionsRoutes } from "./src/questions/questions.routes.config";
import { AnswersRoutes } from "./src/answers/answers.routes.config";
import Answer from "./src/answers/Answer.model";
import bodyParser from "body-parser";
import { AuthRoutes } from "./src/auth/auth.routes.config";

const app: express.Application = express();

const server: http.Server = http.createServer(app);
const port = 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
const routes: Array<CommonRoutesConfig> = [new AuthRoutes(app), new UsersRoutes(app), new QuestionsRoutes(app), new AnswersRoutes(app)];


server.listen(port, () => {
  routes.forEach((route: CommonRoutesConfig) => {
    console.log(`Routes configured for ${route.getName()}`);
  });
  try {
    Answer.sync();
    User.sync();
    Question.sync();
  } catch (error) {
    console.log(error);
    
  }
 
  console.log("Сервак");
});
