import React, { useState } from 'react';

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
}

const QuizApp: React.FC = () => {
  const questions: Question[] = [
    {
      question: 'Qual é a capital do Brasil?',
      options: ['Rio de Janeiro', 'São Paulo', 'Brasília', 'Salvador'],
      correctAnswer: 2,
    },
    {
      question: 'Qual é o maior planeta do sistema solar?',
      options: ['Terra', 'Marte', 'Júpiter', 'Vênus'],
      correctAnswer: 2,
    },
    {
      question: 'Qual é o maior mamífero terrestre?',
      options: ['Elefante Africano', 'Baleia Azul', 'Girafa', 'Rinoceronte'],
      correctAnswer: 0,
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
  };

  const handleNextQuestion = () => {
    if (selectedOption !== null) {
      if (selectedOption === questions[currentQuestion].correctAnswer) {
        setScore(score + 1);
      }
      setSelectedOption(null);
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowScore(true);
      }
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div>
      {showScore ? (
        <div>
          <h2>Pontuação: {score} / {questions.length}</h2>
          <button onClick={restartQuiz}>Reiniciar Quiz</button>
        </div>
      ) : (
        <div>
          <h2>Pergunta {currentQuestion + 1} de {questions.length}</h2>
          <h3>{questions[currentQuestion].question}</h3>
          <ul>
            {questions[currentQuestion].options.map((option, index) => (
              <li key={index}>
                <label>
                  <input
                    type="radio"
                    name="option"
                    checked={selectedOption === index}
                    onChange={() => handleOptionSelect(index)}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
          <button onClick={handleNextQuestion}>Próxima Pergunta</button>
        </div>
      )}
    </div>
  );
};

export default QuizApp;