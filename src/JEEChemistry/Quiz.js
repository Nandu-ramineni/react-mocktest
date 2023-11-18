import React from 'react';
import './Quiz.css'; // Import the CSS file

function Quiz({ question, Image, answers, handleAnswerClick }) {
    return (
        <div className="quiz">
            <h2>{question}</h2>
            {Image && <img src={Image} alt="Question" />}
            <div className="answers">
                {answers.map((answer, index) => (
                    <button
                        key={index}
                        className="answers-btn"
                        onClick={() => handleAnswerClick(answer.isCorrect)}
                    >
                        {answer.text}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Quiz;
