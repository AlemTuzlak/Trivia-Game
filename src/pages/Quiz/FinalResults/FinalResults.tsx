import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import { decodeHtml } from '../../../helpers/decodeHtml';
import { Question, Answer } from '../../../types';

interface FinalResultsProps {
  questions: Question[];
  answers: Answer[];
  playAgain: () => void
}

const FinalResults: FC<FinalResultsProps> = ({ questions, answers, playAgain }) => {
  const [showResults, setShowResults] = useState(false);
  const navigation = useNavigate()
  return (<>
    {showResults ? <div data-testid="final-results" className='final-results'>
      <h1 className='main-title-small mb3'>
        Here is the list of your answers:
      </h1>
      {questions.map((result, i) => {
        const correctAnswer = result.correct_answer === answers[i];
        return (
          <div className='final-results-answer' key={result.question}>
            <h2 className='final-results-question'>{i + 1}. {decodeHtml(result.question)}</h2>
            <p className={correctAnswer ? 'final-results-correct' : 'final-results-incorrect'}>
              You answered with &quot;{answers[i]}&quot;. Your answer was {correctAnswer ? `correct!` : `incorrect!`}
            </p>
          </div>
        );
      })}

      <div className='buttons buttons-right'>
        <Button data-testid="end-quiz" text='End quiz' color='red' onClick={() => navigation('/')} />
        <Button data-testid="play-again" text='play again' color='green' onClick={() => playAgain()} />
      </div>
    </div> : <>
      <h1 className='main-title-large'>
        Thank you for playing!!
      </h1>
      <h1 data-testid="score-answers" className='main-title-medium'>
        You scored {questions.filter((question, i ) => question.correct_answer === answers[i]).length} out of 10
      </h1>
      <div><Button data-testid="show-results" onClick={() => setShowResults(true)} text='Show results' color='green' /></div>
    </>}
  </>)
};

export {FinalResults};