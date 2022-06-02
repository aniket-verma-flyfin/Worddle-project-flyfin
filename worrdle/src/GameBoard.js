import React, {useContext } from 'react';
import { AppContext } from './App';
import Square from './Square';


// initial board values
export const board = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

// 2d boardColor array to store initial color of the cells
export const boardColor = [
  ['#131a26', '#131a26', '#131a26', '#131a26', '#131a26'],
  ['#131a26', '#131a26', '#131a26', '#131a26', '#131a26'],
  ['#131a26', '#131a26', '#131a26', '#131a26', '#131a26'],
  ['#131a26', '#131a26', '#131a26', '#131a26', '#131a26'],
  ['#131a26', '#131a26', '#131a26', '#131a26', '#131a26'],
  ['#131a26', '#131a26', '#131a26', '#131a26', '#131a26'],
];

  //for generating rows of blocks 
  function BlockRow(props) {
    const TOTAL_BLOCKS = 5; // total number of blocks in a row
    const Blockrow = []; // array for storing the blocks in a row

    for(let block = 1; block <= TOTAL_BLOCKS; ++block){    
        Blockrow.push(<Square id= {block + 10*props.id} val = {props.board[props.id-1][block-1]} color = {props.boardColor[props.id-1][block-1]}/>); // push the block component
    }
  
    // finally return the row of blocks
    return Blockrow;
  
  }
  
  //for creating the game board
  function GameBoardContainer(props){
    const TOTAL_ROWS = 6; // total number of rows in a game board
    const BlockRows = []; // array for storing the block rows
    
    // store BlockRows each containing equal number of squares
    for(let rows = 1; rows <= TOTAL_ROWS; ++rows){
        BlockRows.push(<BlockRow id = {rows} board = {props.gameboard} action = {props.SetGameBoard} boardColor = {props.boardColor}/>);
        // <br></br>
    }
  
    //finally return the board
    return BlockRows;
  }
  
  
  //gameBoard component
  function GameBoard(){

    let {newBoard, setNewBoard, newBoardColor} = useContext(AppContext);

    return (
        <div className="gameBoard">
            <GameBoardContainer gameboard = {newBoard} SetGameBoard = {setNewBoard} boardColor = {newBoardColor}/>
        </div>
    );
  }

export default GameBoard;