import React from 'react';
import Footer from '../Footer';
import Header from '../Header';

const Scaffold: React.FC = props => {
  return(
      <>
      <Header/>
        {props.children}
      <Footer/>
      </>
  );
}

export default Scaffold;