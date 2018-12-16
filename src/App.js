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

    handleAnswer = answer => {
        const { answers, currentQuestion } = this.state;
        const newAnswers = [...answers];

        newAnswers[currentQuestion] = answer.target.value;

        this.setState({
            answers: newAnswers
        });
    };

    handleProgress = progress => {
        const { currentQuestion } = this.state;
        let newQuestion = progress.target.value;

        if (newQuestion === 'next') {
            newQuestion = currentQuestion + 1;
        } else if (newQuestion === 'back') {
            newQuestion = currentQuestion - 1;
        } else {
            newQuestion = parseInt(progress.target.value, 10);
        }

        this.setState({
            currentQuestion: newQuestion
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
                    <SplitScreen>
                        <ErrorBoundary>
                            <Quiz
                                question={activeQuestion.question}
                                answers={activeQuestion.answers}
                                correctAnswer={activeQuestion.correctAnswer}
                                selectedAnswer={activeAnswer}
                                onAnswer={this.handleAnswer}
                            />
                        </ErrorBoundary>
                        <div>
                            <ErrorBoundary>
                                <Progress
                                    current={currentQuestion}
                                    onChange={this.handleProgress}
                                    showSteps={true}
                                    totalSteps={questions.length}
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
                            </ErrorBoundary>

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
                        </div>
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
