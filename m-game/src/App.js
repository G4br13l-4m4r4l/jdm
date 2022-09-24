import React, { Component, useEffect, useState } from 'react';
import * as Sty from './App.styles';
import { Button } from './components/button';
import { InfoItem } from './components/InfoItem';
import { Items } from './data/items';
class App extends Component {
  render() {

    const [playing, setplaying] =  useState(false);
    const [timeE, setTimeE] = useState(0);
    const [moveC, setmoveC] = useState(0);
    const [showCount, setshownCount] = useState(0);
    const [GridItem, setGridItem] = useState([]);

    useEffect(()=> resetAndCreateGrid(),[]);

    const resetAndCreateGrid = ()=>{
      // reset the game

      setTimeE(0);
      setmoveC(0);
      setshownCount(0);

      //creating the grid
      let gridTemp = [];
      for(let i = 0; i<(Items.length *2); i++){
        gridTemp.push({
          item:null,
          shown: false,
          permanentShown: false
        });
      }

      setGridItem(gridTemp);


      //start the game
    
      setplaying(true);

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
            <Sty.Grid>

            </Sty.Grid>
          </Sty.Area>
        </Sty.Container>
      </div>
    );
  }
}

export default App;
