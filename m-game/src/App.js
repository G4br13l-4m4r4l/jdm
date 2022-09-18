import React, { Component } from 'react';
import * as Sty from './App.styles';
import { Button } from './components/button';
import { InfoItem } from './components/InfoItem';
class App extends Component {
  render() {
    
    const resetAndCreateGrid = ()=>{

    }
    
    return (
      <div className="App">
        <Sty.Container>
          <Sty.Info>
            <Sty.LogoLink href="#"> <img src="https://images.unsplash.com/photo-1533279443086-d1c19a186416?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop" width="200" alt=""/></Sty.LogoLink>
            <Sty.InfoArea>
              <InfoItem label='Tempo' value="00:00" />
              <InfoItem label='movimentos' value="0"/>
            </Sty.InfoArea>
            <Button label="Reiniciar" icon="" onClick={resetAndCreateGrid} />
          </Sty.Info>
          <Sty.Area>
            Coming soon!
          </Sty.Area>
        </Sty.Container>
      </div>
    );
  }
}

export default App;
