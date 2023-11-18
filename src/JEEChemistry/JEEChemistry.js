

import './App.css';
import React, { useState, useEffect } from 'react';
import Quiz from './Quiz';
import { BrowserRouter as Link } from 'react-router-dom';
import quizData from './chemistryData';// Your quiz data containing questions and answers
function JeeChemistry() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [timeLeft, setTimeLeft] = useState(1800); // Time in seconds (1800 seconds = 30 minutes)
    const [answered, setAnswered] = useState(Array(quizData.length).fill(false));

    const handleAnswerClick = (isCorrect) => {
        const updatedAnswered = answered.slice();
        updatedAnswered[currentQuestion] = true;
        setAnswered(updatedAnswered);
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < quizData.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    const handlePreviousClick = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const handleNextClick = () => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < quizData.length) {
            setCurrentQuestion(nextQuestion);
        }
    };

    const handleReset = () => {
        setShowScore(false);
        setCurrentQuestion(0);
        setScore(0);
        setTimeLeft(1800);
        setAnswered(Array(quizData.length).fill(false));
    };

    const handleJumpToQuestion = (questionNumber) => {
        setCurrentQuestion(questionNumber);
    };

    const calculatePercentage = () => {
        return (score / quizData.length) * 100;
    };

    useEffect(() => {
        if (timeLeft === 0) {
            setShowScore(true);
        } else {
            const timer = setTimeout(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [timeLeft, showScore]);

    return (
        <div className="app">
            <div className='title'><h1> Mock Test Duniya</h1>
                <p>Exclusive for JEE Mains/Advance,TS & Ap Eamcet,Gate Mock Tests</p>
            </div>
            <div className="quiz-container">
                {showScore ? (
                    <div className="score-section">
                        {calculatePercentage() >= 35 ? (
                            <div>
                                <h2>Congratulations!</h2>
                                <p id='color'>You have passed the mock test.</p>
                                <p id='color'>Your final score: {score} out of {quizData.length}</p>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: `${calculatePercentage()}%` }}>
                                        {calculatePercentage().toFixed(2)}%
                                    </div>
                                </div>
                                <p>Thank you! 😊</p>
                                <p>For more Free Mock Tests 👉<Link to="/App">Click here</Link></p>
                            </div>
                        ) : (
                            <div>
                                <h2>Test Failed</h2>
                                <p>Your final score: {score} out of {quizData.length}</p>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: `${calculatePercentage()}%` }}>
                                        {calculatePercentage().toFixed(2)}%
                                    </div>
                                </div>
                                <p>Thank you for participating.</p>
                            </div>
                        )}
                        <button onClick={handleReset}>Try Again</button>
                    </div>
                ) : (
                    <div>
                        <div className="question-info">
                            <div className="timer">
                                <h2>Time Left</h2>
                                <p>
                                    {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toLocaleString('en-US', { minimumIntegerDigits: 2 })}
                                </p>
                            </div>
                            <div className='info'><p>Question {currentQuestion + 1} of {quizData.length}</p></div>

                        </div>
                        <Quiz
                            question={quizData[currentQuestion].question}
                            answers={quizData[currentQuestion].answers}
                            handleAnswerClick={handleAnswerClick}
                        />
                        <div className="navigation">
                            <button onClick={handlePreviousClick} disabled={currentQuestion === 0}>
                                Previous Question
                            </button>
                            <button onClick={handleNextClick} disabled={currentQuestion === quizData.length - 1}>
                                Next Question
                            </button>
                            {currentQuestion === quizData.length - 1 && (
                                <button onClick={() => setShowScore(true)}>Submit</button>
                            )}
                        </div>
                    </div>
                )}
                {showScore ? null : (
                    <div className="question-status">
                        {answered.map((isAnswered, index) => (
                            <div
                                key={index}
                                onClick={() => handleJumpToQuestion(index)}
                                className={`status-indicator ${isAnswered ? 'answered' : index !== currentQuestion && 'not-visited'}`}
                            >
                                {index + 1}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default JeeChemistry;
