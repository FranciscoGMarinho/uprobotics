import React from 'react';
import { Component, Fragment } from 'react';
import styles from '../../assets/css/robotics.css';
import color from '../../assets/css/colors.css';
import apresentacao from "../../assets/images/slide.png"
import 'materialize-css';
import { Button, Card, Row, Col } from 'react-materialize';

import BlocklyComponent, { Block, Value, Field, Shadow } from '../../Blockly';
import 'materialize-css';
import BlocklyJS from 'blockly/javascript';


import '../../blocks/customblocks';
import '../../generator/generator';
import '../../App.css';

class Create extends React.Component {

  constructor(props) {
    super(props);
    this.simpleWorkspace = React.createRef();
  }

  generateCode = () => {
    var code = BlocklyJS.workspaceToCode(this.simpleWorkspace.workspace);
    console.log(code);
  }

  render() {
    return (

      <Fragment>
        <nav class="breadcrumb-color">
          <div class="nav-wrapper  container ">
            <div class="col s12">
              <a href="#!" class="breadcrumb">Home</a>
              <a href="#!" class="breadcrumb">Explorar</a>
            </div>
          </div>
        </nav>

        <div class="primary-color-light-2">
          {/* class"section" define a altura da página */}
          <section className="section  valign-wrapper  container">

            {/* title */}
            <div className="row center-align ">
              <div className="col s12 ">
                texto
              </div>
            </div>
            {/* fim: Title */}
          </section>
        </div>


        {/* tela de código */}
        <div class="row ">
          <div class="col s12 red">

            <BlocklyComponent ref={this.simpleWorkspace}
              readOnly={false} trashcan={true} media={'media/'}
              move={{
                scrollbars: true,
                drag: true,
                wheel: true
              }}
              initialXml={`
                  <xml xmlns="http://www.w3.org/1999/xhtml">
                  <block type="controls_ifelse" x="0" y="0"></block>
                  </xml>
                        `}>

              <Block type="test_react_field" />
              <Block type="test_react_date_field" />
              <Block type="controls_ifelse" />
              <Block type="logic_compare" />
              <Block type="logic_operation" />
              <Block type="controls_repeat_ext">
                <Value name="TIMES">
                  <Shadow type="math_number">
                    <Field name="NUM">10</Field>
                  </Shadow>
                </Value>
              </Block>
              <Block type="logic_operation" />
              <Block type="logic_negate" />
              <Block type="logic_boolean" />
              <Block type="logic_null" disabled="true" />
              <Block type="logic_ternary" />
              <Block type="text_charAt">
                <Value name="VALUE">
                  <Block type="variables_get">
                    <Field name="VAR">text</Field>
                  </Block>
                </Value>
              </Block>
            </BlocklyComponent>
          </div>
        </div>
        {/* Fim: tela de codigo */}


      </Fragment>
    );
  }
}








export default Create;







