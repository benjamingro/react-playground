import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faCheck, faSyncAlt, faBan, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import '../css/ToDo.css';


function ToDo({ todo, index, remove }) {
    const [myClass, setMyClass] = React.useState('');
    function removeMe() {
        remove(index);
    }
    function completeMe() {
        setMyClass('strikeThrough');
    }
    function unCompleteMe() {
        setMyClass('');

    }

    return (
        <>
            <div className="row w-100 my-1" >
                <div className="col-lg-8">
                    <span id="toDoText" className={`${myClass} handWriting`}>{todo.text}</span>
                </div>
                <div className="col-lg-2">
                    <span className="text-warning controlIcon" onClick={removeMe} ><FontAwesomeIcon icon={faTimesCircle} /></span>

                </div>
                <div className="col-lg-2">
                    {!myClass && <span className="text-success controlIcon" onClick={completeMe}><FontAwesomeIcon icon={faCheck} /></span>}
                    {myClass && <span className="text-info controlIcon" onClick={unCompleteMe} ><FontAwesomeIcon icon={faSyncAlt} /></span>}

                </div>


            </div>

            <div className="row w-100">
                <div className="col-lg-1"></div>
                <div className="col-lg-10 border-bottom"></div>
                <div className="col-lg-1"></div>

            </div>

        </>
    );
}

export default ToDo