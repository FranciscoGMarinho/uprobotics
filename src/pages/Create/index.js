import React from 'react'
import BlocklyComponent, { Category, Block, Value, Field, Shadow } from '../../Blockly'
import CreateContainer from '../../containers/CreateContainer'
import BlocklyJS from 'blockly/javascript'
// import BlocklyJS from '../../blocks/customblocks'
import 'materialize-css'
import '../../blocks/customblocks'
import '../../generator/generator'
import '../../assets/css/custom.css'
import './styled.css';



class Create extends React.Component {

  constructor(props) {
    super(props);
    this.simpleWorkspace = React.createRef();

    this.state = { code: "" };
  }

  generateCode = () => {
    var code = BlocklyJS.workspaceToCode(this.simpleWorkspace.workspace);
    console.log(code);
    this.setState({ code: code });
  }

  render() {
    return (

      <>
        <CreateContainer>
          <div className="row">
            <div id="block-code">
              <div className="col s12 m8 l8 ">
                <div className="menu-lower-primary">
                  {/* texto aqui */}
                </div>

                <div className="section-create">
                  <BlocklyComponent
                    ref={this.simpleWorkspace}
                    readOnly={false}
                    trashcan={true}
                    media={'media/'}
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

                    <Category name="Bloco 1" colour="120">
                      <Block type="controls_repeat_ext">
                        <Value name="TIMES">
                          <Shadow type="math_number">
                            <Field name="NUM">10</Field>
                          </Shadow>
                        </Value>
                      </Block>
                    </Category>


                    <Category name="Bloco 2" colour="120">
                      <Block type="test_react_field" />
                      <Block type="teste" />
                      <Block type="logic_compare" />
                      <Block type="logic_operation" />
                    </Category>

                    <Category name="Movimentos" colour="270">
                      <Block type="init_arm"> </Block>
                      <Block type="garra_fechar_pos"> </Block>
                      <Block type="garra_abrir_pos"> </Block>
                      <Block type="girar_esquerda"> </Block>
                      <Block type="girar_direita"> </Block>
                      <Block type="altura_pos"> </Block>
                      <Block type="angulo_pos"> </Block>
                    </Category>

                    <Category name="Funções" colour="195">
                      <Block type="import_controls"></Block>
                      <Block type="import_functions"></Block>
                    </Category>

                    <Category name="Controle" colour="300">
                      <Block type="metodo_loop"></Block>
                    </Category>

                    <Category name="Arduino" colour="160">
                      <Block type="definir_portas"></Block>
                    </Category>

                  </BlocklyComponent>
                </div>
              </div>
            </div>
            {/* End: #primary-block */}


            <div id="block-code">
              <div className="col s12 m4 l4 ">

                <div className="menu-lower-secondary">
                  {/* button */}
                  <button onClick={this.generateCode} className="  green-text  btn-floating btn-code z-depth-0 green "><i class="material-icons">play_arrow</i></button>
                </div>

                <div className="gera-code" id="code">
                  <br />
                  {/* code aqui */}
                  {this.state.code}
                </div>

              </div>
            </div>

          </div>



        </CreateContainer>
      </>
    );
  }
}

export default Create;







