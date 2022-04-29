import questionsDao from "./questions.dao";

class QuestionsService {
   async createQuestion(createQuestionData: any) {
      const question = await questionsDao.createQuestion(createQuestionData)
      return question
   }
   async getAllQuestions() {
      const questions = await questionsDao.getAllQuestions()
      return questions
   }
   
   async getQuestionById(id: any) {
      const question = await questionsDao.getQuestionById(id)
      return question
   }
}

export default new QuestionsService();