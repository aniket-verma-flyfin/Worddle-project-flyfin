import React, {Component} from 'react';

class Square extends Component{
    constructor(props){
        super(props);
        this.width = '3em';
        this.height = '3em';
    }

    render(){
        return <div className='Square' 
                style = {{width: this.width, height: this.height}}
            />
    }
}

export default Square