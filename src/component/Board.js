import React,{ Component } from 'react';

function Square(props) {
    let color = false;
    if(props.goGreen)
    {
        color = props.goGreen[0]===props.position;
        if(color === false)
            color = props.goGreen[1]===props.position;
        if(color === false)
            color = props.goGreen[2]===props.position;
    }
    color = color === true ? "square tile-green" : "square tile-white"
    
    return(
        <button 
            className={color}  
            onClick={()=> props.onClick()}
        >
            {props.value}  
        </button>
    );
}

class Board extends Component {

    renderSquare(i) {
        return (
            <Square 
                goGreen={this.props.goGreen}
                value={this.props.squares[i]}
                position= {i}
                onClick={()=> this.props.onClick(i)}
            />
        );
    }

    render() {
        return(
            <div>
                <div className='board-row'>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className='board-row'>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className='board-row'>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}
export default Board;
