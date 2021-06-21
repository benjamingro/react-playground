import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes} from '@fortawesome/free-solid-svg-icons';

function Square({ myLetter, clickHandler, rowIndex, colIndex, myWinner,boardSize,player1Color,player2Color }) {

    let classList = "col border border-warning d-flex justify-content-center pt-2"; 
    if(rowIndex===0)
    {
        classList += " border-top-0";
    }
    if(colIndex===0)
    {
        classList += " border-left-0";
    }
    if(colIndex===(boardSize-1))
    {
        classList += " border-right-0";
    }
    if(rowIndex===(boardSize-1))
    {
        classList += " border-bottom-0";
    }

    return (
        <>
            <div className={classList } onClick={()=>clickHandler(rowIndex,colIndex)} style={{ maxHeight: '50px', maxWidth: '50px', minHeight:'50px',minWidth:'50px',fontSize:"1.4rem" }}>
                {myLetter==='X'?<FontAwesomeIcon icon={faTimes} className="mt-1" style={{color:player1Color}}/>:''}
                {myLetter==='O'?<span style={{fontWeight:"bold",color:player2Color}}>O</span>:''}
                {myWinner==='diagonalRight'?<DiagonalRight />:''}
                {myWinner==='diagonalLeft'?<DiagonalLeft />:''}
                {myWinner==='vertical'?<Vertical />:''}
                {myWinner==='horizontal'?<Horizontal />:''}

            </div>
        </>
    )
}

function DiagonalRight(){
    return(
        <svg width="50px" height="50px" style={{position:"absolute",top:"-2px",left:"-2px"}}>
                    <line x1="0" y1="0" x2="50" y2="50" style={{stroke:"rgb(94,182,92)",strokeWidth:"3"}}></line>
                </svg>
    )
}

function DiagonalLeft(){
    return(
        <svg width="50px" height="50px" style={{position:"absolute",top:"-2px",left:"-2px"}}>
                    <line x1="50" y1="0" x2="0" y2="50" style={{stroke:"rgb(94,182,92)",strokeWidth:"3"}}></line>
                </svg>
    )
}

function Vertical(){
    return(
        <svg width="50px" height="50px" style={{position:"absolute",top:"-2px",left:"-2px"}}>
                    <line x1="25" y1="0" x2="25" y2="50" style={{stroke:"rgb(94,182,92)",strokeWidth:"3"}}></line>
                </svg>
    )
}

function Horizontal(){
    return(
        <svg width="50px" height="50px" style={{position:"absolute",top:"-2px",left:"-2px"}}>
                    <line x1="0" y1="25" x2="50" y2="25" style={{stroke:"rgb(94,182,92)",strokeWidth:"3"}}></line>
                </svg>
    )
}



export default Square

