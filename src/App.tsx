import React, { useState } from 'react';

interface Question {
  question: string;
  options: string[];
}

const QuizApp: React.FC = () => {
  const questions: Question[] = [

    // quest 0
    {
      question: 'Qual é o seu problema mais visível?',
      options: ['Tela Azul'],
    },
    // quest 1
    {
      question: 'Você alterou alguma configuração na BIOS?',
      options: ['Sim', 'Não'],
    },
    // quest 2
    {
      question: 'Foi adicionado algum HARDWARE novo no computador?',
      options: ['Sim', 'Não'],
    },
    // quest 3
    {
      question: 'Qual dessas ações você já fez na BIOS?',
      options: ['Aumento da frequência da memoria RAM', 'Aumento da frequência da CPU'],
    },
    // quest 4 [NECESSÁRIO CONTINUAÇÃO]
    {
      question: 'Qual desse você adicionou ou modificou?',
      options: ['Memoria RAM', 'Processador'],
    },
     //quest 5
    {
      question: 'Você fez alguma atualização ou instalação recente?',
      options: ['Sim', 'Não'],
    },
    //quest 6 , Resolvendo problema da questão 5 [NECESSÁRIO CONTINUAÇÃO]
    {
      question: 'Você irá precisar ligar e desligar o computador 3 vezes em sequencia, utilizando o botão "POWER" de seu computador, assim que a marca do fabricante aparecer na tela. Quando tiver realizado esse procedimento, prossiga',
      options: ['Prosseguir'],
    },
    //quest 7 , Resolvendo problema da questão 5
    {
      question: 'Na tela de "Reparo Automático" escolha a opção de "Opções Avançadas"',
      options: ['Prosseguir'],
    },
    //quest 8 , Resolvendo problema da questão 5
    {
      question: 'Em sequencia escolha essas opções "Opções avançadas", "Configurações de Inicialização" e "Reiniciar"',
      options: ['Prosseguir'],
    },
    //quest 9 , Resolvendo problema da questão 5
    {
      question: 'Pressione a tecla "4" do seu teclado para entrar no modo de segurança do windows sem internet',
      options: ['Prosseguir'],
    },
    //quest 10 , Resolvendo problema da questão 5
    {
      question: 'Assim que entrar no windows novamente, vá na barra de pesquisa e escreva "Prompt de Comando", pressione o botão direito do mouse e execute como administrador',
      options: ['Prosseguir'],
    },
    //quest 11 , Resolvendo problema da questão 5
    {
      question: 'Ao aparecer o Prompt de Comando, utilize esses comandos individualmente e espere cada um deles terminar seus procedimentos: "bootrec /fixmbr", "bootrec /fixboot", "bootrec /rebuildbcd"',
      options: ['Prosseguir'],
    },
    //quest 12 , Resolvendo problema da questão 5
    {
      question: 'Realizando todos eles, reinicie seu windows normalmente e veja se o problema foi solucionado',
      options: ['Problema resolvido', 'Ainda estou com problema'],
    },
    //quest 13 , Resolvendo problema da questão 3, Frequencia de RAM
    {
      question: 'Acesse as configurações avançadas da BIOS e procure pela aba Memória',
      options: ['Prosseguir'],
    },
    //quest 14 , Resolvendo problema da questão 3, frequencia de RAM
    {
      question: 'Depois entre em "Profile memória" e "Diminuir a frequencia para padrão"',
      options: ['Prosseguir'],
    },
    //quest 15 , Resolvendo problema da questão 3, frequencia de RAM
    {
      question: 'Agora reinicie seu windows normalmente e veja se o problema foi solucionado',
      options: ['Problema resolvido', 'Ainda estou com problema'],
    },
    //quest 16 TELA FINAL
    {
      question: 'Agradecemos por nos escolher. Esperamos que tenha gostado =D',
      options: [],
    },
    //quest 17 , Resolvendo problema da questão 4, processador 
    {
      question: 'Após entrar no "Reparo Automático" vá em "Opções avançadas" e entre em "Prompt de Comando"',
      options: ['Prosseguir'],
    },
    //quest 18 , Resolvendo problema da questão 4, processador 
    {
      question: 'Digite esse comando para tentar resolver um problema interno do processador: "bcdedit /deletevalue (default) truncatememory"',
      options: ['Prosseguir'],
    },
    //quest 19 , Resolvendo problema da questão 4, processador
    {
      question: 'Agora reinicie seu windows normalmente e veja se o problema foi solucionado',
      options: ['Problema resolvido', 'Ainda estou com problema'],
    },
    //quest 20 , Resolvendo problema da questão 3, Frequencia da CPU
    {
      question: 'Acesse as configurações avançadas da BIOS e Verifique as configurações da CPU. Certifique-se de que a frequência está configurada corretamente. Algumas placas-mãe permitem ajustar a frequência manualmente.',
      options: ['Prosseguir'],
    },
    //quest 21 , Resolvendo problema da questão 4, memoria ram 
    {
      question: 'Para resolver problemas após adicionar ou modificar RAM, verifique a compatibilidade, reassente os módulos, atualize a BIOS/UEFI e teste cada módulo individualmente. Também restaure as configurações padrão na BIOS/UEFI para evitar ajustes inadequados.',
      options: ['Prosseguir'],
    },



    // Adicione mais perguntas conforme necessário
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleOptionSelect = (optionIndex: number) => {

    setSelectedOption(optionIndex);

    // Lógica para determinar a próxima pergunta com base na opção selecionada

    if (currentQuestion === 0){ // quest 0

      if (optionIndex === 0){
        setCurrentQuestion(1);
      }

    }else if (currentQuestion === 1){ // quest 1

      if (optionIndex === 0){
        setCurrentQuestion(3); 
      }else if (optionIndex === 1){
        setCurrentQuestion(2);
      }

    }else if (currentQuestion === 2){ // quest 2

      if (optionIndex === 0){
        setCurrentQuestion(4); 
      }else if (optionIndex === 1){
        setCurrentQuestion(5);
      }

    }else if (currentQuestion === 3){ // quest 3

      if (optionIndex === 0){
        setCurrentQuestion(13); 
      }else if (optionIndex === 1){
        setCurrentQuestion(20);
      }else if (optionIndex === 2){
        setCurrentQuestion(4);
      }

    }else if(currentQuestion === 4){ // quest 4

      if (optionIndex === 0){
        setCurrentQuestion(21); 
      }else if (optionIndex === 1){
        setCurrentQuestion(17);
      }
    }
    else if (currentQuestion === 5){ // quest 5

      if (optionIndex === 0){
        setCurrentQuestion(6); 
      }else if (optionIndex === 1){
        setCurrentQuestion(0);
      }

    }
    else if (currentQuestion === 6){ // quest 6

      if (optionIndex === 0){
        setCurrentQuestion(7); 
      }else if (optionIndex === 1){
        setCurrentQuestion(0);
      }

    }
    else if (currentQuestion === 7){ // quest 7

      if (optionIndex === 0){
        setCurrentQuestion(8); 
      }else if (optionIndex === 1){
        setCurrentQuestion(0);
      }

    }
    else if (currentQuestion === 8){ // quest 8

      if (optionIndex === 0){
        setCurrentQuestion(9); 
      }else if (optionIndex === 1){
        setCurrentQuestion(0);
      }

    }
    else if (currentQuestion === 9){ // quest 9

      if (optionIndex === 0){
        setCurrentQuestion(10); 
      }else if (optionIndex === 1){
        setCurrentQuestion(0);
      }

    }
    else if (currentQuestion === 10){ // quest 10

      if (optionIndex === 0){
        setCurrentQuestion(11); 
      }else if (optionIndex === 1){
        setCurrentQuestion(0);
      }

    }
    else if (currentQuestion === 11){ // quest 11

      if (optionIndex === 0){
        setCurrentQuestion(12); 
      }else if (optionIndex === 1){
        setCurrentQuestion(0);
      }

    }
    else if (currentQuestion === 12){ // quest 12 [TELA DE FINALIZAÇÃO - Quest 16]

      if (optionIndex === 0){
        setCurrentQuestion(16); 
      }else if (optionIndex === 1){
        setCurrentQuestion(0);
      }

    }
    else if (currentQuestion === 13){ // quest 13

      if (optionIndex === 0){
        setCurrentQuestion(14); 
      }else if (optionIndex === 1){
        setCurrentQuestion(0);
      }

    }
    else if (currentQuestion === 14){ // quest 14

      if (optionIndex === 0){
        setCurrentQuestion(15); 
      }else if (optionIndex === 1){
        setCurrentQuestion(0);
      }

    }
    else if (currentQuestion === 15){ // quest 15

      if (optionIndex === 0){
        setCurrentQuestion(16); 
      }else if (optionIndex === 1){
        setCurrentQuestion(0);
      }

    }
    else if (currentQuestion === 17){ // quest 17

      if (optionIndex === 0){
        setCurrentQuestion(18); 
      }else if (optionIndex === 1){
        setCurrentQuestion(0);
      }

    }
    else if (currentQuestion === 18){ // quest 18

      if (optionIndex === 0){
        setCurrentQuestion(19); 
      }else if (optionIndex === 1){
        setCurrentQuestion(0);
      }

    }
    else if (currentQuestion === 19){ // quest 19

      if (optionIndex === 0){
        setCurrentQuestion(16); 
      }else if (optionIndex === 1){
        setCurrentQuestion(0);
      }

    }
    else if (currentQuestion === 20){ // quest 20

      if (optionIndex === 0){
        setCurrentQuestion(19); 
      }else if (optionIndex === 1){
        setCurrentQuestion(0);
      }

    }
    else if (currentQuestion === 21){ // quest 21

      if (optionIndex === 0){
        setCurrentQuestion(19); 
      }else if (optionIndex === 1){
        setCurrentQuestion(0);
      }

    }
    
    

    setSelectedOption(null); //reseta o check que da seleção de resposta

  };

  return (
    <div className='main'>
      <div className='conteudo'>
        <h1>Etapa {currentQuestion + 1} de {questions.length}</h1>
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
    </div>
  );
};

export default QuizApp;