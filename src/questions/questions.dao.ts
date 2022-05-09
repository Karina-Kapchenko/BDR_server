import sequelize from "sequelize";
import Answer from "../answers/Answer.model";
import Question from "./Question.model";
class QuestionsDao {
  async createQuestion(createQuestionData: any) {
    try {
      const question = await Question.create(createQuestionData);
      return question;
    } catch (error) {
      throw error;
    }
  }
  async getAllQuestions() {
    try {
      const questions = await Question.findAll({
        include: [
          {
            model: Answer,
            as: "answer",
            attributes: [],
          },
        ],
        attributes: {
          include: [[sequelize.fn("AVG", sequelize.col("answer.mark")), "average"]],
        },
        group: ["answer.siteId", "Questions.id"],
      });
      return questions;
    } catch (error) {
      console.log(error);
    }
  }

  async getQuestionById(id: any) {
    try {
      const question = await Question.findByPk(id);
      return question;
    } catch (error) {
      throw error;
    }
  }

  async incrementUsersCountById(id: any) {
    try {
      const question = await Question.increment("passed_count", { by: 1, where: { id } });
      return question;
    } catch (error) {
      throw error;
    }
  }
}

export default new QuestionsDao();
