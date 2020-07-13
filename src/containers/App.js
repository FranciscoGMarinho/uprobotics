/**
 * @license
 * @fileoverview Main React component that includes the Blockly component.
 * @author samelh@google.com (Sam El-Husseini)
 */

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Container from '../containers/Container';

// import 'materialize-css';

export default function App({ children }) {
  return (
    <div>
      <Navbar />
      {/*mostra conteúdo das paginas, exceto Login e Create */}
      <Container> {children} </Container>
      <Footer />
    </div>
  );
}



