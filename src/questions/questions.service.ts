import answersService from "../answers/answers.service";
import questionsDao from "./questions.dao";

class QuestionsService {
  async createQuestion(createQuestionData: any) {
    try {
      const question = await questionsDao.createQuestion(createQuestionData);
      return question;
    } catch (error) {
       throw error
    }
  }
  async getAllQuestions() {
    try {
      const questions = await questionsDao.getAllQuestions();
      return questions;
    } catch (error) {
       throw error
    }
  }

  async getQuestionById(id: any) {
    try {
      const question = await questionsDao.getQuestionById(id);
      const answers = await answersService.getAllSiteAnswers(id);
      return {...question?.get(), answers};
    } catch (error) {
       throw error
    }
  }

  async incrementUsersCountById(id: any) {
    try {
      const question = await questionsDao.incrementUsersCountById(id);
      return question
    } catch (error) {
       throw error
    }
  }
}

export default new QuestionsService();
