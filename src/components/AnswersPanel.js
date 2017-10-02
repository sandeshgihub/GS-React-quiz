import React from 'react';

const AnswerPanel = (props) => {
  function handleAnswerClick(e){
      console.log('answerpanel', e.target.value);
      props.handleAnswerClick(e.target.value);
  }

  return (
      <div className="quiz-options">
          {
            props.answers.map(a => {
                return (
                    <button className="quiz-choice" value={a.points} onClick={handleAnswerClick}>{a.answer}</button>
                )
            })
          }
      </div>
  )
};

export default AnswerPanel;
