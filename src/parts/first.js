import React from 'react';

  export default function First(props) {
  const { history } = props;

  const handleNext = () => {
    history.push('?page=2');
  }

  return (
    <div>
      <h1>first</h1>
      <button onClick={handleNext}>次へ</button>
    </div>
  );
}
