/**
 * @license
 *
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Main React component that includes the Blockly component.
 * @author samelh@google.com (Sam El-Husseini)
 */

import React from 'react';
import Navbar from './basic/Navbar';
import Footer from './basic/Footer';
import './App.css';
import 'materialize-css';
import { Button, Card, Row, Col} from 'react-materialize';

import logo from './logo.svg';

/*
import BlocklyComponent, { Block, Value, Field, Shadow} from './Blockly';
import BlocklyJS from 'blockly/javascript';
import './blocks/customblocks';
import './generator/generator';
*/

import './App.css';
//import './assets/css/materialize.min.css'; //para usar o materialize é necessário importar

class App extends React.Component {

  render() {
    return (

      <div>
        <Navbar />
        {/*     <Routes /> */}
         <Footer /> 
      </div>
    );
  }
}

export default App;
