import React from 'react';

function BoardSizeSelect({boardSize, boardSizeSelectHandler}){
    const selectOnChange = (event)=>{
        const newBoardSize = Number(event.target.value);
        boardSizeSelectHandler(newBoardSize); 
    };
    return(
        <>
            <select onChange={selectOnChange} value={boardSize}>
                <option value="3">3x3 Board</option>
                <option value="4">4x4 Board</option>
                <option value="5">5x5 Board</option>
            </select>
        </>
    )
}

export default BoardSizeSelect