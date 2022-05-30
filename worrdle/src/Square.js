import React from 'react';

// square component 
function Square(props){

        // width and height of the square
        const width = '2.75em';
        const height = '2.75em'; 
        // return the className  
        return (<div className='Square' id = {props.id} 
        style = {{color:'white', width: width, height: height, alignItems : 'center', justifyContent: 'center', textAlign:'center', backgroundColor: props.color}}>
                {props.val}
                </div>
        );
}

export default Square