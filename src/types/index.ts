export interface Question {
  category: string;
  correct_answer: "True" | "False";
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}
export type Answer = "False" | "True";