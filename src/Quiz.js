import React from 'react';
import './Quiz.css';

function Quiz({
    question,
    answers = [],
    correctAnswer,
    selectedAnswer = '',
    onAnswer
}) {
    return (
        <section className="quiz">
            <h1 className="quiz__heading">{question}</h1>

            <ol className="quiz__answers">
                {answers.map(({ text, id }) => {
                    const hasAnswered = selectedAnswer.length;
                    const isCorrectAnswer = hasAnswered && correctAnswer === id;
                    const isIncorrectAnswer =
                        hasAnswered &&
                        !isCorrectAnswer &&
                        selectedAnswer === id;

                    if (hasAnswered && !isCorrectAnswer && !isIncorrectAnswer) {
                        return null;
                    }

                    return (
                        <li className="quiz__answerbox" key={id}>
                            <button
                                className={`quiz__answer btn ${
                                    isCorrectAnswer
                                        ? 'quiz__answer--correct'
                                        : ''
                                } ${
                                    isIncorrectAnswer
                                        ? 'quiz__answer--incorrect'
                                        : ''
                                }`}
                                disabled={selectedAnswer.length}
                                onClick={onAnswer}
                                type="button"
                                value={id}
                            >
                                {text}
                            </button>
                        </li>
                    );
                })}
            </ol>
        </section>
    );
}

export default Quiz;
