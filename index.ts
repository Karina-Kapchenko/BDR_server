import express from 'express';
import * as http from 'http';
import cors from 'cors';
import { CommonRoutesConfig } from './src/common/common.routes.config';
import { UsersRoutes } from './src/users/users.routes.config';
import User from './src/users/User.model';
import Question from './src/questions/Question.model';
import { QuestionsRoutes } from './src/questions/questions.routes.config';
import { AnswersRoutes } from './src/answers/answers.routes.config';
import Answer from './src/answers/Answer.model';

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port = 3000;
const routes: Array<CommonRoutesConfig> = [new UsersRoutes(app), new QuestionsRoutes(app), new AnswersRoutes(app)];


// here we are adding middleware to parse all incoming requests as JSON 
app.use(express.json());

// here we are adding middleware to allow cross-origin requests
app.use(cors());

app.get('/', (req: express.Request, res: express.Response) => {
   res.send('СПИСОК ЮЗЕРІВ')
});

server.listen(port, () => {
   routes.forEach((route: CommonRoutesConfig) => {
       console.log(`Routes configured for ${route.getName()}`);
   });
   User.sync();
   Question.sync();
   Answer.sync();
   console.log('Сервак');
});