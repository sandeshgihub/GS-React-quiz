import React from 'react';
const SuccessPanel = (props) => {
    if (!props.isEnd())
      return (<div></div>)
    return (
      <div className="success-panel">
        <h2>Your score was {props.score()}</h2>
        <button onClick={() => props.reload() } className="restart-btn">Restart</button>
      </div>
    )
};

export default SuccessPanel;
