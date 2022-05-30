import GameBoard, {board, boardColor} from './GameBoard';
import React, {useState, createContext} from 'react';
import KeyBoard from './KeyBoard';

export const AppContext = createContext();
const Answer = "REACT";

function App() {

  //this state is for updating if the game is On or not.
  const [gameState, setGameState] = useState(true);

  // activeRow state mentions the active row in which the Active Cell lies
  const [activeRow, setActiveRow] = useState(0);

  //aciveCol state mentions the active col in which the Active Cell lies
  const [activeCol, setActiveCol] = useState(0);

  // keyBoardButtonPressed is the key which is pressed 
  const [keyBoardButtonPressed, setKeyBoardButtonPressed] = useState("");

  // newboard state is to update the state of 2d board
  let [newboard, setNewBoard] = useState(board);

  // color of each cell of the board
  let [newboardColor, setNewBoardColor] = useState(boardColor);

  // this function checks whether word on Enter is correct or not
  const CheckWordOnEnter = () => {

    // check if the current game is not over
    if(!gameState) return;

    // check if the whole row is complete or not.
    for(let i = 0; i<5;  ++i){
      if(newboard[activeRow][i]==='') return;
    }
    // match the current row with the answer
    let shouldGameStop = true;

    // storing the newboardColor in a variable
    let updateBoardColor = newboardColor; 

    // check for updation of the color of each cell
    for(let i = 0; i < 5; ++i){
        if(newboard[activeRow][i]!==Answer[i]){
            shouldGameStop = false; // if one character doesn;t match
            updateBoardColor[activeRow][i] = 	(Answer.includes(newboard[activeRow][i])?'#d0a32b':'#303030');
        }else{
          updateBoardColor[activeRow][i] = 	'#6b8e23';
        }
    }

    // set the color of the Board
    setNewBoardColor(updateBoardColor);

    // set whether game should continue or not
    if(shouldGameStop){
      setGameState(false); // set game state to false and the game is over
    }
    else{
      if(activeRow+1<6){
        setActiveRow(activeRow+1); // increment the active row
        setActiveCol(0); // set active col to 0
      }else{
        setGameState(false); // set game state to false and the game is over
      }
    }
}

// function that Deletes the word on calling delete
const DeleteWord = () => {

  // check if the current game is not over
  if(!gameState) return;

  // if current cell is not empty 
  if(newboard[activeRow][activeCol]){
    newboard[activeRow][activeCol]=''; // assign it the empty string
    setNewBoard(newboard); // set the new state of the board
    if(activeCol-1>=0){
      setActiveCol(activeCol-1);
    }
  }

  // if current cell is empty then delete it's previous cell.
  else if(activeRow >=0  && activeRow < 6){
      if (activeCol >=0 && activeCol < 5){
          if(activeCol!==0){ // edge case check if its not the very first cell.
              newboard[activeRow][activeCol-1]=''; // assign it the empty string
              setNewBoard(newboard); // set the new state of the board
              setActiveCol(activeCol - 1);
          }else{
              newboard[activeRow][activeCol]=''; // assign it the empty string
              setNewBoard(newboard); // set the new state of the board
          }
      }
  }
};

// keyHandler if for adding the functionality to the letter keyboard buttons
const keyHandler = (props) => {

  if(!gameState) return; // if the game is over then return;
  
  let updateBoard = []; // to store the updated board
  
  if(newboard[activeRow][activeCol]!==''){
    setActiveCol(activeCol+1);
  }

  // make the updations in the newboard
  for(let i = 0; i<newboard.length; ++i){
      let arr =[];
      for(let j = 0; j<newboard[i].length;++j){
        // if the current cell was updated then update in the new board as well
        if(i===activeRow && j===activeCol){
          arr.push(props.Keys[props.id - 1][props.key-1]);
        }else{
          // else push the same state in the new board
          arr.push(newboard[i][j]);
        }
      }
      updateBoard.push(arr);
  }
  // set the state of the new board
  setNewBoard(updateBoard);

  // lets update the active row and col
  let updatedActiveCol = activeCol;
  let updatedActiveRow = activeRow;

  // if the active column can be incremented, increment it.
  if(activeCol+1<5){
      updatedActiveCol = activeCol+1;
  }

  // set the active Row and Col
  setActiveRow(updatedActiveRow);
  setActiveCol(updatedActiveCol);
};


  return (
    <>
    <div >
      <h1 className='Title' style = {{color: 'white', textAlign: 'center', fontWeight: 'bold', fontFamily: 'Arial'}}> Worrdle</h1>
      <hr
        style={{
            color: 'white',
            height: 0
        }}
    />
    </div>
    <AppContext.Provider value = {{
      gameState, setGameState,
      activeRow, setActiveRow,
      activeCol, setActiveCol,
      keyBoardButtonPressed, setKeyBoardButtonPressed,
      newboard, setNewBoard,
      Answer, CheckWordOnEnter, 
      DeleteWord, keyHandler, 
      newboardColor, setNewBoardColor
    }}>
    <div className="App">
       <GameBoard />
    </div>
    <div className='keyboardView'>
        <KeyBoard />
    </div>
    </AppContext.Provider>
    </>
  );
}

export default App;
