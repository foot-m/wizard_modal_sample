import React from 'react';
import Modal from 'react-modal';
import First from './parts/first';
import Second from './parts/second';
import Third from './parts/third';
import { withRouter } from 'react-router';

function MainModal(props) {
  const { history, qs, isOpen, closeModal } = props;
  const page = new URLSearchParams(qs).get('page');

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal}>
      {renderPage(page, history)}
    </Modal>
  );
}

function renderPage(page, history) {
  switch(page) {
    case '1': 
      return <First history={history} />;
    case '2': 
      return <Second history={history} />;
    case '3': 
      return <Third history={history} />;
    default: 
      return <First history={history} />;
  }
}


export default withRouter(MainModal);
