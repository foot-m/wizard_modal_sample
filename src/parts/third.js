import React from 'react';

export default function Third(props) {
  const { history } = props;

  const handlePrev = () => {
    history.push('?page=2');
  }

  return (
    <div>
      <h1>Third</h1>
      <button onClick={handlePrev}>戻る</button>
    </div>
  );
}
