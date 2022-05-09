import sequelize from "sequelize";
import Answer from "./Answer.model";
class AnswersDao {
  async createAnswer(answersArray: any) {
    try {
      const answer = await Answer.bulkCreate(answersArray);
      return answer;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getAnswerById(id: any) {
    try {
      const answer = await Answer.findByPk(id);
      return answer;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async countAverageSiteMark(id: any) {
    try {
      const answer = await Answer.findOne({
        where: {
          siteId: id,
        },
        attributes: [[sequelize.fn("AVG", sequelize.col("mark")), "average"]],
      });
      return answer;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async countAveragePropertyMark(id: any, questionNumber: any) {
    try {
      const answer = await Answer.findOne({
        where: {
          siteId: id,
          questionNumber,
        },
        attributes: [[sequelize.fn("AVG", sequelize.col("mark")), "average"]],
      });
      return answer;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getPropertyInfo(siteId: any, questionNumber: any) {
    try {
      const answer = await Answer.findOne({
        where: {
          siteId,
          questionNumber,
        },
        attributes: [[sequelize.fn("AVG", sequelize.col("mark")), "average"]],
        raw: true,
      });

      const fivesCount = await Answer.count({
        where: {
          siteId,
          questionNumber,
          mark: 5,
        },
      });

      const fourthCount = await Answer.count({
        where: {
          siteId,
          questionNumber,
          mark: 4,
        },
      });

      const threeCount = await Answer.count({
        where: {
          siteId,
          questionNumber,
          mark: 3,
        },
      });

      const twoCount = await Answer.count({
        where: {
          siteId,
          questionNumber,
          mark: 2,
        },
      });
      const oneCount = await Answer.count({
        where: {
          siteId,
          questionNumber,
          mark: 1,
        },
      });

      return { ...answer, oneCount, twoCount, threeCount, fourthCount, fivesCount };
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getAllSiteAnswers(siteId: any) {
    try {
      const firstPropertyAnswers = await this.getPropertyInfo(siteId, 1);
      const secondPropertyAnswers = await this.getPropertyInfo(siteId, 2);
      const thirdPropertyAnswers = await this.getPropertyInfo(siteId, 3);
      const fourthPropertyAnswers = await this.getPropertyInfo(siteId, 4);
      const fivesPropertyAnswers = await this.getPropertyInfo(siteId, 5);
      const sixthPropertyAnswers = await this.getPropertyInfo(siteId, 6);
      const seventhPropertyAnswers = await this.getPropertyInfo(siteId, 7);
      const eightPropertyAnswers = await this.getPropertyInfo(siteId, 8);
      const ninePropertyAnswers = await this.getPropertyInfo(siteId, 9);
      const tenPropertyAnswers = await this.getPropertyInfo(siteId, 10);
      const elevenPropertyAnswers = await this.getPropertyInfo(siteId, 11);

      return [
        firstPropertyAnswers,
        secondPropertyAnswers,
        thirdPropertyAnswers,
        fourthPropertyAnswers,
        fivesPropertyAnswers,
        sixthPropertyAnswers,
        seventhPropertyAnswers,
        eightPropertyAnswers,
        ninePropertyAnswers,
        tenPropertyAnswers,
        elevenPropertyAnswers,
      ];
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export default new AnswersDao();
