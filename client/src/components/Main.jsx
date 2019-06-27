import React from 'react';
import { withRouter } from 'react-router';
import RegisterForm from './RegisterForm';

function Main() {
  return (
    <div className="Main">
      <RegisterForm />
    </div>
  );
}

export default withRouter(Main);
