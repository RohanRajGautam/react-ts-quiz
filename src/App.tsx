import React, {useState} from 'react';
import {fetchQuizQuestions} from './API'

//components
import QuestionCard from './components/QuestionCard';
//types
import {QuestionState, Difficulty} from './API'

type AnswerObject = {
  question: string,
  answer: string,
  correct: boolean,
  correctAnswer: string,
}

const TOTAL_QUESTIONS = 10;

function App() {

const [loading, setLoading] = useState(false);
const [questions, setQuestions] = useState<QuestionState[]>([]);
const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([])
const [number, setNumber] = useState(0)
const [score, setScore] = useState(0)
const [gameOver, setGameOver] = useState(true)

console.log(questions);


  const startTrivia = async () => {
    setLoading(true)
    setGameOver(false)

    const newQuestion = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    )

    setQuestions(newQuestion)
    setScore(0)
    setUserAnswers([])
    setNumber(0)
    setLoading(false)
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }

  return (
    <div className="App">
      <h1>RRG Quiz App</h1>
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
      <button className="start" onClick={startTrivia}>Start</button>
      ) : null }
      { !gameOver && <p className="score">Score: </p> }
      { loading && <p>Questions Loading ...</p> }
      {/* <QuestionCard 
        questionNm={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      /> */}
      <button className="next" onClick={nextQuestion}>Next Question</button>
    </div>
  );
}

export default App;
