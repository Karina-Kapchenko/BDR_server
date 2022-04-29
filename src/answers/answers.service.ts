import answersDao from "./answers.dao"

class AnswersService {
   async createAnswer(createAnswerData: any) {
      const answer = await answersDao.createAnswer(createAnswerData)
      return answer
   }

   async getAnswerById(id: any) {
      const answer = await answersDao.getAnswerById(id)
      return answer
   }

   async getAllSiteAnswers(siteId: any) {
      const answers = await answersDao.getAllSiteAnswers(siteId)
      return answers
   }
}

export default new AnswersService();