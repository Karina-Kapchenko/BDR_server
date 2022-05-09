import questionsService from "../questions/questions.service";
import answersDao from "./answers.dao";

class AnswersService {
  async createAnswer(createAnswerData: any) {
    try {
      const answer = await answersDao.createAnswer(createAnswerData.answers);
      const updateSite = await questionsService.incrementUsersCountById(createAnswerData.siteId);
      return answer;
    } catch (error) {
      throw error;
    }
  }

  async getAnswerById(id: any) {
    try {
      const answer = await answersDao.getAnswerById(id);
      return answer;
    } catch (error) {
      throw error;
    }
  }

  async getAllSiteAnswers(siteId: any) {
    try {
      const answers = await answersDao.getAllSiteAnswers(siteId);
      return answers;
    } catch (error) {
      throw error;
    }
  }

  async getPropertyInfo(siteId: any, questionNumber: any) {
    try {
      const answers = await answersDao.getPropertyInfo(siteId, questionNumber);
      return answers;
    } catch (error) {
      throw error;
    }
  }
}

export default new AnswersService();
