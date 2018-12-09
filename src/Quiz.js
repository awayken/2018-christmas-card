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
                    const hasAnswered =
                        selectedAnswer.length && selectedAnswer === id;
                    const isCorrect = selectedAnswer === correctAnswer;

                    return (
                        <li className="quiz__answerbox" key={id}>
                            <button
                                className={`quiz__answer ${
                                    hasAnswered && isCorrect
                                        ? 'quiz__answer--correct'
                                        : ''
                                } ${
                                    hasAnswered && !isCorrect
                                        ? 'quiz__answer--incorrect'
                                        : ''
                                } ${
                                    selectedAnswer.length &&
                                    !isCorrect &&
                                    correctAnswer === id
                                        ? 'quiz__answer--wascorrect'
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
