import React from 'react';

export default function Second(props) {
  const { history } = props;

  const handleNext = () => {
    history.push('?page=3');
  }

  const handlePrev = () => {
    history.push('?page=1');
  }

  return (
    <div>
      <h1>Second</h1>
      <button onClick={handleNext}>次へ</button>
      <button onClick={handlePrev}>戻る</button>
    </div>
  );
}
