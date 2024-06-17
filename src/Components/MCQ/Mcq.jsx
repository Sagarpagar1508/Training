import React, { useState } from 'react';
import './styles.css'

const mcqData = [
  {
    question: 'Which of the following is a primary purpose of fund accounting?',
    options:  ['To maximize profitability', 'To ensure that financial resources ', 'To reduce tax liabilities', 'To simplify financial reporting'],
    correctAnswer: 'To ensure that financial resources are used according to legal and administrative requirements'
  },
  {
    question: 'Which of the following is an example of a fiduciary fund?',
    options: ['General Fund', 'Enterprise Fund', 'Pension Trust Fund', 'Capital Projects Fund'],
    correctAnswer: 'Pension Trust Fund'
  },
  {
    question: 'What type of fund is typically used to account for activities similar to those found in the private sector, where fees are charged for services?',
    options: ['General Fund', ' Special Revenue Fund', 'Enterprise Fund', 'Permanent Fund'],
    correctAnswer: 'Enterprise Fund'
  },
  {
    question: 'What is the primary purpose of a "general fund" in fund accounting?',
    options: ['To manage restricted donations', 'To account for the day-to-day operations and expenses of an organization', 'To manage investments and endowments', 'To track capital expenditures'],
    correctAnswer: 'To account for the day-to-day operations and expenses of an organization'
  },
  {
    question: 'How is fund balance typically categorized in fund accounting?',
    options: ['Net income and net loss', 'Assets and liabilities', ' Unrestricted, temporarily restricted, and permanently restricted', 'Revenue and expenses'],
    correctAnswer: 'Unrestricted, temporarily restricted, and permanently restricted'
  }
];

const Mcq = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(Array(mcqData.length).fill(null));
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOptionChange = (option) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions[currentQuestion] = option;
    setSelectedOptions(updatedOptions);
  };

  const handleNext = () => {
    if (currentQuestion < mcqData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const calculateScore = () => {
    return selectedOptions.reduce((score, option, index) => {
      if (option === mcqData[index].correctAnswer) {
        score += 1;
      }
      return score;
    }, 0);
  };

  if (isSubmitted) {
    const score = calculateScore();
    return (
      <div className="result-container "style={{marginTop: '170px' }}>
        <h2>Test Completed!</h2>
        {score > 2 ? <p style={{color: 'green'}}>Your Score: <span > {score} /{mcqData.length}</span> submitted</p>: <p style={{color: 'red'}}>Your Score: <span >{score} /{mcqData.length} </span>Failed</p>}
      </div>
    );
  }
return (
  <div className="container-fluid ">
    <div className="mcq-container  " style={{boxShadow:'5pxpx 10px 5px 10px #EEEEE'}}>
      <h4>Question {currentQuestion + 1}</h4>
      <p className='fw-bold'>{mcqData[currentQuestion].question}</p>
      <div className="options-container">
        {mcqData[currentQuestion].options.map((option, index) => (
          <div key={index} className="option">
            <input
              type="radio"
              name={`question-${currentQuestion}`}
              value={option}
              checked={selectedOptions[currentQuestion] === option}
              onChange={() => handleOptionChange(option)}
            />
            <label>&nbsp;{option}</label>
          </div>
        ))}
      </div>
      <div className="navigation-buttons">
        <button className='btn btn-warning' onClick={handlePrevious} disabled={currentQuestion === 0}>
          Previous
        </button>
        {currentQuestion < mcqData.length - 1 ? (
          <button className='btn btn-info' onClick={handleNext}>
            Next
          </button>
        ) : (
          <button className='btn btn-success' onClick={handleSubmit}>
            Submit
          </button>
        )}
      </div>
    </div>
    </div>

  );
};

const styles = {
  mcqContainer: {
    width: '50%',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9'
  },
  optionsContainer: {
    margin: '20px 0'
  },
  option: {
    margin: '10px 0'
  },
  navigationButtons: {
    display: 'flex',
    justifyContent: 'space-between'
  }
};

export default Mcq;