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
                myArray[i][j] = { myLetter: '', myWinner: '', rowIndex: i, colIndex: j };
            }
        }
        return myArray;
    });


    const clickHandler = (rowIndex, colIndex) => {

        let myUpdateBoard = myBoard.slice();
        if (myUpdateBoard[rowIndex][colIndex].myLetter === '') {
            xState ? myUpdateBoard[rowIndex][colIndex].myLetter = "X" : myUpdateBoard[rowIndex][colIndex].myLetter = "O";
            setMyBoard(myUpdateBoard);
            // alert(JSON.stringify(myBoard)); 
            calculateWinner();
            setXState(!xState);
            // calculateWinner(); 
            // alert(`inside clickHandler ${rowIndex} ${colIndex}`)
            // alert(JSON.stringify(myBoard));
        }
    };

    const calculateWinner = () => {
        // alert('inside calculateWinner');
        // alert(JSON.stringify(myBoard)); 

        let i, j = 0;
        let myUpdateBoard = myBoard.slice();

        //check for horizontal winner
        for (i = 0; i < boardSize; i++) {
            let horizontalWin = true;
            for (j = 0; j < boardSize - 1; j++) {
                if (myBoard[i][j].myLetter != myBoard[i][j + 1].myLetter || myBoard[i][j].myLetter == '' || myBoard[i][j + 1].myLetter == '') {
                    horizontalWin = false;
                }

            }
            if (horizontalWin) {
                for (j = 0; j < boardSize; j++) {
                    myUpdateBoard[i][j].myWinner = 'horizontal'
                }
                setMyBoard(myUpdateBoard);
                break;
            }
        }
        //check for vertical winner
        for (j = 0; j < boardSize; j++) {
            let verticalWin = true;
            for (i = 0; i < boardSize - 1; i++) {
                if (myBoard[i][j].myLetter != myBoard[i + 1][j].myLetter || myBoard[i][j].myLetter == '' || myBoard[i + 1][j].myLetter == '') {
                    verticalWin = false;
                }

            }
            if (verticalWin) {
                for (i = 0; i < boardSize; i++) {
                    myUpdateBoard[i][j].myWinner = 'vertical';
                }
                setMyBoard(myUpdateBoard);
                break;
            }
        }
        //check for diagonalRight winner 
        let diagonalRightWin = true;
        for (i = 0; i < boardSize - 1; i++) {
            if (myBoard[i][i].myLetter != myBoard[i + 1][i + 1].myLetter || myBoard[i][i].myLetter == '' || myBoard[i + 1][i + 1].myLetter == '') {
                diagonalRightWin = false;
            }
        }
        if (diagonalRightWin) {
            for (i = 0; i < boardSize; i++) {
                myUpdateBoard[i][i].myWinner = 'diagonalRight'; 
            }
        }

        //check for diagonalLeft winner 
        let diagonalLeftWin = true;
        for (i = 0; i < boardSize - 1; i++) {
            if (myBoard[i][(boardSize-1)-i].myLetter != myBoard[i + 1][(boardSize-1)-(i + 1)].myLetter || myBoard[i][(boardSize-1)-i].myLetter == '' || myBoard[i + 1][(boardSize-1)-(i + 1)].myLetter == '') {
                diagonalLeftWin = false;
            }
        }
        if (diagonalLeftWin) {
            for (i = 0; i < boardSize; i++) {
                myUpdateBoard[i][(boardSize-1)-i].myWinner = 'diagonalLeft'; 
            }
        }


    };

    return (
        <>
            {
                myBoard.map((value, rowIndex) => {
                    return (
                        <>
                            <div className="row w-100">
                                {
                                    myBoard[rowIndex].map((value, colIndex) => {
                                        return (
                                            <Square myLetter={myBoard[rowIndex][colIndex].myLetter} myWinner={myBoard[rowIndex][colIndex].myWinner} rowIndex={rowIndex} colIndex={colIndex} clickHandler={clickHandler} />
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

