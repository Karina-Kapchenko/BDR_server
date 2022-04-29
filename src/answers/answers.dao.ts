import Answer from './Answer.model';
class AnswersDao {
   async createAnswer(createAnswerData: any) {
      const answer = await Answer.create(createAnswerData)
      return answer
   }

   async getAnswerById(id: any) {
      const answer = await Answer.findByPk(id)
      return answer
   }

   async getAllSiteAnswers(siteId: any) {
      const answers = await Answer.findOne({where: {
         siteId
      }})
      return answers
   }
}

export default new AnswersDao();
