export type Answer = "False" | "True";
export interface Question {
  category: string;
  correct_answer: Answer;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}
