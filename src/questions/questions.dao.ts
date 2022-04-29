import Question from "./Question.model";
class QuestionsDao {
  async createQuestion(createQuestionData: any) {
    const question = await Question.create(createQuestionData);
    return question;
  }
  async getAllQuestions() {
    const questions = await Question.findAll();
    return questions;
  }

  async getQuestionById(id: any) {
    const question = await Question.findByPk(id);
    return question;
  }
}

export default new QuestionsDao();
