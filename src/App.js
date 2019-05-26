import React, { useState, useEffect } from 'react';
import MainModal from './modal';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const qs = window.location.search;
    const openModal = new URLSearchParams(qs).get('openModal');
    if (openModal === '1') {
      setIsModalOpen(true);
    }
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={toggleModal.bind(this)}>モーダルオープン</button>
        <BrowserRouter>
          <Route
            exact
            path="/"
            render={
              (props) => <MainModal
                          qs={props.location.search}
                          isOpen={isModalOpen}
                          closeModal={closeModal.bind(this)}
                        />
            }
          />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
