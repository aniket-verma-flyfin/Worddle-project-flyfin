import React from 'react';
import Square from './Square';


//for making a square block
function Blocks(props){
    return (
        <Square id = {props.id} />
    );
  }
  
  //for generating rows of blocks 
  function BlockRow(props) {
    const TOTAL_BLOCKS = 5; // total number of blocks in a row
    const Blockrow = []; // array for storing the blocks in a row
  
    // store 'TOTAL_BLOCKS' number of blocks in each row
    for(let block = 1; block <= TOTAL_BLOCKS; ++block){
        Blockrow.push(<Blocks id = {block + 10*props.id}/>); // push the block component
        console.log(block + 10*props.id);
    }
  
    // finally return the row of blocks
    return Blockrow;
  
  }
  
  //for creating the game board
  function CreateGameBoard(){
    const TOTAL_ROWS = 6; // total number of rows in a game board
    const BlockRows = []; // array for storing the block rows
    
    // store BlockRows each containing equal number of squares
    for(let rows = 1; rows <= TOTAL_ROWS; ++rows){
        BlockRows.push(<BlockRow id = {rows}/>);
    }
  
    //finally return the board
    return BlockRows;
  }
  
  
  //gameBoard component
  function GameBoard(){
    return (
        <div className="gameBoard">
            <CreateGameBoard />
        </div>
    );
  }

export default GameBoard;