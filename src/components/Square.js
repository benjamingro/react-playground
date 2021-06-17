import React from 'react';

function Square({xState,updateBoard,rowIndex,colIndex}){
    //xState == true, false
    // myState = 'x','o',''
    const [myState,setMyState] = React.useState('')
    const clickHandler = () =>{
        if(myState=='')
        {
            xState?setMyState("X"):setMyState("O"); 
            // send state back up to board 
            updateBoard(myState,rowIndex,colIndex); 
        }
        // else do nothing, the square is already occupied 
        
    }; 

    return(
        <>
            <div className="col border" onClick={clickHandler} style={{minHeight:'30px',minWidth:'30px'}}>
                {myState}
            </div>
        </>
    )
}

export default Square

