import React from 'react';
import Square from './Square.js'
import BoardSizeSelect from './BoardSizeSelect.js'
import Button from 'react-bootstrap/Button';

import '../css/Board.css';


function Board() {
    // const boardSize = 3;
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
        let previousBoardHistory = boardHistory.slice(); 
        // alert(JSON.stringify(previousBoardHistory));

        if (myUpdateBoard[rowIndex][colIndex].myLetter === '' && !winner) {
            xState ? myUpdateBoard[rowIndex][colIndex].myLetter = "X" : myUpdateBoard[rowIndex][colIndex].myLetter = "O";
            // start update history
            // const previousBoard = myBoard.slice(); 
            // let previousBoardHistory = history.slice(); 
            // alert(JSON.stringify(previousBoardHistory));
            
            previousBoardHistory.push(myUpdateBoard.slice());
            // const newHistory = [...previousBoardHistory,myUpdateBoard]; 
            // alert(JSON.stringify(previousBoardHistory));
            // alert(JSON.stringify(newHistory));

            // setBoardHistory(newHistory);
            setBoardHistory(previousBoardHistory.slice()); 

            //end updateHistory 
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
        
        // const myHistory = boardHistory.slice(); 
        // if(myHistory.length>1)
        // {
        //     myHistory.pop(); 
        //     const previousMove = myHistory[myHistory.length-1];
        //     // alert(previousMove); 
        //     setMyBoard(previousMove); 
        //     setBoardHistory(myHistory); 
        //     setXState(!xState);
        // }
         
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
                    {/* {xState ? "X" : "O"}'s turn */}
                    {xState && !winner && <span class="badge badge-pill badge-primary pt-2">X's turn</span>}
                    {!xState && !winner && <span class="badge badge-pill badge-danger pt-2">O's turn</span>}

                    {!xState && winner && <span class="badge badge-pill badge-primary pt-2">X wins!</span>}
                    {xState && winner && <span class="badge badge-pill badge-danger pt-2">O wins!</span>}

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
            {/* <div className="col-lg-1"></div> */}

                <div className="col-lg-4 d-flex justify-content-center">
                    <Button variant="warning" onClick={resetBoard}>Reset board</Button>
                </div>
                {/* <div className="col-lg-4 d-flex justify-content-center">
                    <Button variant="info" className={(boardHistory.length<2?'disabled':'')} onClick={undoMove}>Undo move</Button>
                </div> */}
                <div className="col-lg-4 d-flex justify-content-center">
                    <Button variant="info" className="disabled" onClick={undoMove}>Undo move</Button>
                </div>

                <div className="col-lg-4 d-flex justify-content-center">
                    <BoardSizeSelect boardSize={boardSize} boardSizeSelectHandler={boardSizeSelectHandler}/> 
                </div>
                
                {/* <div className="col-lg-1"></div> */}

            </div>
        </div>
    )
}

export default Board

