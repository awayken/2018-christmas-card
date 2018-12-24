import React, { Component } from 'react';

import './App.css';

import ErrorBoundary from './ErrorBoundary';
import Introduction from './Introduction';
import Progress from './Progress';
import Quiz from './Quiz';
import Reward from './Reward';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            answers: [],
            currentQuestion: 0,
            startQuiz: false
        };
    }

    componentDidMount() {
        document.body.addEventListener('keyup', this.handleArrows);
    }

    componentWillUnmount() {
        document.body.removeEventListener('keyup', this.handleArrows);
    }

    handleArrows = event => {
        const { startQuiz } = this.state;
        const key = event.key;

        if (startQuiz) {
            if (key === 'ArrowRight') {
                this.handleProgress('next');
            } else if (key === 'ArrowLeft') {
                this.handleProgress('back');
            }
        }
    };

    handleAnswer = answer => {
        const { answers, currentQuestion } = this.state;
        const newAnswers = [...answers];

        newAnswers[currentQuestion] = answer.target.value;

        this.setState({
            answers: newAnswers
        });
    };

    handleProgress = progress => {
        const { questions } = this.props;
        const progressTarget = progress.currentTarget || {};
        const progressValue = progressTarget.value || progress;

        this.setState(
            prevState => {
                const { currentQuestion } = prevState;

                let nextQuestion;
                if (progressValue === 'next') {
                    nextQuestion = currentQuestion + 1;
                } else if (progressValue === 'back') {
                    nextQuestion = currentQuestion - 1;
                } else {
                    nextQuestion = parseInt(progressValue, 10);
                }

                if (nextQuestion >= questions.length) {
                    nextQuestion = questions.length - 1;
                } else if (nextQuestion < 0) {
                    nextQuestion = 0;
                }

                return {
                    currentQuestion: nextQuestion
                };
            },
            () => window.scrollTo(0, 0)
        );
    };

    startQuiz = () => {
        this.setState({
            startQuiz: true
        });
    };

    render() {
        const { preambles, questions, rewards } = this.props;
        const { answers, currentQuestion, startQuiz } = this.state;

        const activeAnswer = answers[currentQuestion];
        const activeQuestion = questions[currentQuestion] || {};
        const activePreamble = preambles[activeQuestion.preamble];
        const activeReward = rewards[activeQuestion.correctAnswer];

        return (
            <main className="app">
                {startQuiz ? (
                    <>
                        <ErrorBoundary>
                            <Progress
                                current={currentQuestion}
                                onChange={this.handleProgress}
                                showSteps={true}
                                totalSteps={questions.length}
                            />
                        </ErrorBoundary>

                        {activePreamble && (
                            <div
                                className="app__preamble"
                                children={activePreamble}
                            />
                        )}

                        <ErrorBoundary>
                            <Quiz
                                question={activeQuestion.question}
                                answers={activeQuestion.answers}
                                correctAnswer={activeQuestion.correctAnswer}
                                selectedAnswer={activeAnswer}
                                onAnswer={this.handleAnswer}
                            />
                        </ErrorBoundary>

                        <ErrorBoundary>
                            <Reward
                                image={activeReward.image}
                                show={!!activeAnswer}
                                video={activeReward.video}
                            >
                                {activeReward.content}
                            </Reward>

                            {!!activeAnswer &&
                                currentQuestion < questions.length - 1 && (
                                    <button
                                        className="btn btn--primary"
                                        onClick={this.handleProgress}
                                        value="next"
                                    >
                                        Next Question
                                    </button>
                                )}
                        </ErrorBoundary>
                    </>
                ) : (
                    <ErrorBoundary>
                        <Introduction onStart={this.startQuiz} />
                    </ErrorBoundary>
                )}
            </main>
        );
    }
}

export default App;
