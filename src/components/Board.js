import React from 'react';
import Square from './Square.js'
import BoardSizeSelect from './BoardSizeSelect.js'
import Button from 'react-bootstrap/Button';

import '../css/Board.css';


function Board() {
    const [boardSize,setBoardSize] = React.useState(3); 
    const [xState, setXState] = React.useState(true);
    const [boardHistory, setBoardHistory] = React.useState([[...getBlankBoard()]]);
    const [winner, setWinner] = React.useState(false);
    const [myBoard, setMyBoard] = React.useState(getBlankBoard);

    const player1Color = "blue";
    const player2Color = "red";

    function getBlankBoard(boardSize=3) {
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
    };


    const clickHandler = (rowIndex, colIndex) => {

        let myUpdateBoard = myBoard.slice();

        let previousBoardHistory = JSON.parse(JSON.stringify(boardHistory)); 

        if (myUpdateBoard[rowIndex][colIndex].myLetter === '' && !winner) {
            xState ? myUpdateBoard[rowIndex][colIndex].myLetter = "X" : myUpdateBoard[rowIndex][colIndex].myLetter = "O";

            previousBoardHistory.push(JSON.parse(JSON.stringify(myUpdateBoard)));

            setBoardHistory(previousBoardHistory); 

            setMyBoard(myUpdateBoard);
            calculateWinner();
            setXState(!xState);

        }
    };

    const boardSizeSelectHandler = (newBoardSize) => {
        setWinner(false);
        setXState(true); 
        setBoardSize(newBoardSize); 
        setMyBoard(getBlankBoard(newBoardSize)); 
    }

    const resetBoard = () => {
        setWinner(false); 
        setXState(true); 
        setBoardHistory([...getBlankBoard(boardSize)]);
        setMyBoard(getBlankBoard(boardSize));
        
    }

    const undoMove = () => {
        
        const myHistory = JSON.parse(JSON.stringify(boardHistory)); 
        if(myHistory.length>1)
        {
            myHistory.pop(); 
            const previousMove = myHistory[myHistory.length-1];
            setMyBoard(previousMove); 
            setBoardHistory(myHistory); 
            setXState(!xState);
            setWinner(false); 
        }
         
    }

    const calculateWinner = () => {
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
                setWinner(true);
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
                setWinner(true);
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
            setMyBoard(myUpdateBoard);
            setWinner(true);
        }

        //check for diagonalLeft winner 
        let diagonalLeftWin = true;
        for (i = 0; i < boardSize - 1; i++) {
            if (myBoard[i][(boardSize - 1) - i].myLetter != myBoard[i + 1][(boardSize - 1) - (i + 1)].myLetter || myBoard[i][(boardSize - 1) - i].myLetter == '' || myBoard[i + 1][(boardSize - 1) - (i + 1)].myLetter == '') {
                diagonalLeftWin = false;
            }
        }
        if (diagonalLeftWin) {
            for (i = 0; i < boardSize; i++) {
                myUpdateBoard[i][(boardSize - 1) - i].myWinner = 'diagonalLeft';
            }
            setMyBoard(myUpdateBoard);
            setWinner(true);

        }


    };

    return (
        <div className="boardClass">
            {/* control row 1 */}
            <div className="row w-100 mb-4">
                
                <div className="col d-flex justify-content-center" style={{ fontSize: "1.5rem", color: (xState ? player1Color : player2Color) }}>
                    {xState && !winner && <span className="badge badge-pill badge-primary pt-2">X's turn</span>}
                    {!xState && !winner && <span className="badge badge-pill badge-danger pt-2">O's turn</span>}

                    {!xState && winner && <span className="badge badge-pill badge-primary pt-2">X wins!</span>}
                    {xState && winner && <span className="badge badge-pill badge-danger pt-2">O wins!</span>}

                </div>

            </div>
            {/* board row */}
            {
                myBoard.map((value, rowIndex) => {
                    return (
                        <>

                            <div className="row w-100 d-flex justify-content-center">
                                {
                                    myBoard[rowIndex].map((value, colIndex) => {
                                        return (
                                            <Square
                                                myLetter={myBoard[rowIndex][colIndex].myLetter}
                                                myWinner={myBoard[rowIndex][colIndex].myWinner}
                                                rowIndex={rowIndex}
                                                colIndex={colIndex}
                                                clickHandler={clickHandler}
                                                boardSize={boardSize}
                                                player1Color={player1Color}
                                                player2Color={player2Color}
                                            />
                                        )
                                    })
                                }
                            </div>
                        </>
                    )
                })
            }
            {/* control row 2 */}
            <div className="row w-100 mt-4">

                <div className="col-lg-4 d-flex justify-content-center">
                    <Button variant="warning" className={(boardHistory.length===1?'disabled':'')} onClick={resetBoard}>Reset board</Button>
                </div>
                <div className="col-lg-4 d-flex justify-content-center">
                    <Button variant="info" className={(boardHistory.length===1?'disabled':'')} onClick={undoMove}>Undo move</Button>
                </div>

                <div className="col-lg-4 d-flex justify-content-center">
                    <BoardSizeSelect boardSize={boardSize} boardSizeSelectHandler={boardSizeSelectHandler}/> 
                </div>
                
            </div>
        </div>
    )
}

export default Board

