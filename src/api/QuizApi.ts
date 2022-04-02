import { AxiosResponse } from "axios";
import { Question } from "../types";
import { apiPrefix, BaseApi } from "./BaseApi";

interface QuizQuestionsResponse {
    results: Question[]
}
class QuizApi extends BaseApi {
  private static instance: QuizApi;

  private constructor() {
    super({ baseURL: `${apiPrefix}/` });
  }

  public static getInstance(): QuizApi {
    if(!QuizApi.instance)
      QuizApi.instance = new QuizApi();
      
    return QuizApi.instance;
  }

  public getQuizQuestions(amount = 10, difficulty = 'hard', type ='boolean'): Promise<AxiosResponse<QuizQuestionsResponse, Error>> {
    return this.instance.get(`api.php?amount=${amount}&difficulty=${difficulty}&type=${type}`);
  }

}

export default QuizApi;