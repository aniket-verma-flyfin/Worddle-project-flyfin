import React from 'react';


function KeyBoardRow(props){
    let row_size = props.Keys.length;
    const row_keys = [];
    for(let key = 1; key <= row_size; ++k){
        row_keys.push(<button >
            {props.Keys[props.id - 1][key-1]}
        </button>);
    }
    return row_keys;
}

function CreateKeyBoard(){
    const NUM_ROWS = 3;
    const KeyBoard = [];
    const Keys = [['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
                  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'], 
                  ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'DEL']];

    for(let row = 1; row <= NUM_ROWS; ++row){
        KeyBoard.push(<KeyBoardRow id = {row} Keys = {Keys}/>);
    }

    return KeyBoard;
}

function KeyBoard(){
    return(
        <div>
            <CreateKeyBoard />
        </div>
    )
}

export default KeyBoard;