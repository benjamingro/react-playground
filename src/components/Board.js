import React from 'react';
import Square from './Square.js'


function Board() {
    const boardSize = 3;
    const [xState, setXState] = React.useState(true);
    const [history, setHistory] = React.useState([]);
    const [myBoard, setMyBoard] = React.useState(() => {
        let myArray = [];
        let i, j = 0;

        for (let i = 0; i < boardSize; i++) {
            myArray.push(new Array(boardSize));
        }
        for (i = 0; i < boardSize; i++) {
            for (j = 0; j < boardSize; j++) {
                myArray[i][j] = '';
            }
        }
        return myArray;
    });

    const updateBoard = (myState, rowIndex, colIndex) => {
        let myUpdateBoard = myBoard.slice(); 
        myUpdateBoard[rowIndex][colIndex]=myState; 
        setMyBoard(myUpdateBoard); 
        // update xState 
        setXState(!xState);
        // update history 
        // check for winner 
    };

    





    return (
        <>
            {
                myBoard.map((value, rowIndex) => {
                    return (
                        <>
                            <div className="row w-100">
                                {
                                    myBoard[rowIndex].map((value,colIndex)=>{
                                        return(
                                            <Square xState={xState} updateBoard={updateBoard} rowIndex={rowIndex} colIndex={colIndex} />
                                        )
                                    })
                                }
                            </div>
                            
                        </>
                    )
                })
            }
        </>
    )
}

export default Board

