import React, { useContext } from 'react';
import { AppContext } from './App';


const NUM_ROWS = 3; // the number of rows in the keyboard

// function which creates a keyboard row by 
// taking props as input

function KeyBoardRow(props){
    const row_keys = []; // array to store the keyboard buttons

    // getting the state of the Keyboard button pressed from
    // App.js
    let  {setKeyBoardButtonPressed, 
        checkWordOnEnter, deleteWord, keyHandler} = useContext(AppContext);

    // create the keyboard keys iteratively.s
    for(let key = 1; key <= props.Keys[props.id-1].length; ++key){
        
        //pushing the keyboard buttons to the array of keyboard buttons
        row_keys.push(<button id = {props.Keys[props.id-1][key-1]} className='button' onClick={(event) => { 
            
            // setting state of the keyboard button
            setKeyBoardButtonPressed(props.Keys[props.id - 1][key-1]);

            // check which keyboard button is pressed 

            // if delete is pressed
            if(event.target.id==='DEL'){
                deleteWord(); // call the DeleteWord functionality
            }else if(event.target.id==='ENTER'){
                checkWordOnEnter(); // call the CheckWordOnEnter functionality
            }else if(event.target.id!==''){ 
                // execute the keyHandler.
                keyHandler({id: props.id, key: key, Keys: props.Keys});
            }
        }
        }>
            {props.Keys[props.id - 1][key-1]}
        </button>);
    }
    return row_keys;
}

// function for creating the Keyboard 
function KeyBoardContainer(){
    const KeyBoard = []; //array storing the Keyboard

    // values for the keys of the keyboard
    const Keys = [['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
                  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'], 
                  ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'DEL']];

    // loop which creates a Row of Keyboard buttons
    for(let row = 1; row <= NUM_ROWS; ++row){
        
        //append the keyboard row to the keyboard array
        KeyBoard.push(<div ><KeyBoardRow id = {row} Keys = {Keys}/></div>);
    }

    // returning the keyboard
    return KeyBoard;
}

// creating the Keyboard component
function KeyBoard(){
    return(
        <div className='KeyBoard'>
            <KeyBoardContainer />
        </div>
    )
}

export default KeyBoard;