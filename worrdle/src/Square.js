import React from 'react';

// square component 
function Square(props){
        // return the className  
        return (<div className='Square' id = {props.id} 
        style = {{backgroundColor: props.color}}>
                {props.val}
                </div>
        );
}

export default Square