import React, { useState } from 'react';

interface Question {
  question: string;
  options: string[];
}

const QuizApp: React.FC = () => {
  const questions: Question[] = [
    {
      question: 'Qual é o seu problema mais visível?',
      options: ['Tela Azul', 'Tela preta', 'Lentidão'],
    },

    {
      question: 'Qual é o maior planeta do sistema solar?',
      options: ['Terra', 'Marte', 'Júpiter', 'Vênus'],
    },

    {
      question: 'Qual é o maior mamífero terrestre?',
      options: ['Elefante Africano', 'Baleia Azul', 'Girafa', 'Rinoceronte'],
    },
    // Adicione mais perguntas conforme necessário
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);

    // Lógica para determinar a próxima pergunta com base na opção selecionada
    if (currentQuestion === 0){

      if (optionIndex === 0) {
        setCurrentQuestion(1);
      } else if (optionIndex === 1) {
        setCurrentQuestion(2);
      } else {
        setCurrentQuestion(3);
      }
    } else if (currentQuestion === 1){

      if (optionIndex === 0) {
        setCurrentQuestion(1); 
      } else if (optionIndex === 1) {
        setCurrentQuestion(2);
      } else {
        setCurrentQuestion(3);
      }
    }
  };

  return (
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
    </div>
  );
};

export default QuizApp;