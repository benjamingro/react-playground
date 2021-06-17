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

    };

    // const getRow = (rowIndex) =>{
    //     let rowArray = []; 
    //     for(let j = 0; j< boardSize;j++){
    //         rowArray.push(
    //             <Square xState={xState} updateBoard={updateBoard} rowIndex={rowIndex} colIndex={j} / >
    //         );
    //     }
    //     return(rowArray)
    // }

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

                                            // <h1>hello</h1>
                                            <Square xState={xState} updateBoard={updateBoard} rowIndex={rowIndex} colIndex={colIndex} />
                            // <h5>{index}</h5>
                                        )
                                    })
                                }
                            </div>
                            {/* <Square xState={xState} updateBoard={updateBoard} rowIndex={0} colIndex={0} />
                            <h5>{index}</h5> */}
                        </>
                    )
                })
            }
        </>
    )
}

export default Board

