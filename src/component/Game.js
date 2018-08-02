import React, { Component } from 'react';
import Board from './Board';

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
    for(let i=0; i < lines.length; i++) {
        const [ a, b, c] = lines[i];
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return [a, b, c, squares[a]];
        }
    }
    return null;
};

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: [9].fill(null),
                squares_position: [9].fill(null),
            }],
            stepNumber: 0,
            xisNext: true,
        }
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber+1);
        const current = history[history.length-1];
        const squares = current.squares.slice();
        const square_pos = current.squares_position.slice();

        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xisNext ? 'X' : 'O';
        square_pos[square_pos.length] = this.getSquarePosition(i);
        this.setState({
            history: history.concat([{
                squares: squares,
                squares_position: square_pos,
            }]),
            stepNumber: history.length,
            xisNext: !this.state.xisNext,
        });
    };
    
    getSquarePosition(index) {
        let column = (index % 3) + 1;
        let row = parseInt(index / 3) + 1;

        return row+"  "+column;
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xisNext: (step % 2) === 0,
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);
        const square_pos = current.squares_position.slice();
        const moves = history.map((step, move) => {
            const desc = (move && square_pos[move]? 'Go to move #' + move + " = " + square_pos[move] : 'Go to Game Start');
            
            const isBold = this.state.stepNumber === move ? "buttons" : "no";
            return(
                <li key={move}>
                    <button className={isBold} onClick={() => this.jumpTo(move)}> {desc} </button>
                </li>
            );
        });
        let status;
        if (winner) {
            status = 'Winner: '+winner[3];
        } else
        this.state.stepNumber === 9 ? status = "Match Draw" 
            : status = "Next Player "+ (this.state.xisNext ? "X" : "O");
        
        return(
            <div className='game'>
                <div className='game-board'>
                    <Board
                        squares={current.squares}
                        onClick={(i)=> this.handleClick(i)}
                        goGreen = {winner}
                    />        
                </div>
                <div className='game-info'>
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}
export default Game;
