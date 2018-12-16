import React, { Component } from 'react';

import './App.css';

import ErrorBoundary from './ErrorBoundary';
import Introduction from './Introduction';
import Progress from './Progress';
import Quiz from './Quiz';
import Reward from './Reward';
import SplitScreen from './SplitScreen';

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
        const { currentQuestion } = this.state;

        let progressValue = progress;
        if (progress.target) {
            progressValue = progress.target.value;
        }

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

        this.setState({
            currentQuestion: nextQuestion
        });
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
                    <SplitScreen
                        header={
                            <ErrorBoundary>
                                <Progress
                                    current={currentQuestion}
                                    onChange={this.handleProgress}
                                    showSteps={true}
                                    totalSteps={questions.length}
                                />
                            </ErrorBoundary>
                        }
                    >
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
                                preamble={activePreamble}
                                image={activeReward.image}
                                show={!!activeAnswer}
                                video={activeReward.video}
                            >
                                {activeReward.content}
                            </Reward>

                            {!!activeAnswer &&
                                currentQuestion < questions.length - 1 && (
                                    <button
                                        className="btn btn--next btn--primary"
                                        onClick={this.handleProgress}
                                        value="next"
                                    >
                                        Next Question
                                    </button>
                                )}
                        </ErrorBoundary>
                    </SplitScreen>
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
