import React from 'react';
import { connect } from "react-redux";
import { setEditableRecordId } from '../../Action/chose.action';

function Note(props) {
    return (
        <div
            key={ props.idPost }
            className={ `Diary_root__ListOfEntries_item${ props.idPost === props.choseDiary ? '-edith' : '' }` }
            onClick={ () => props.setEditableRecordId(props.idPost) }>

            <span className='Diary_root__ListOfEntries_item-postName'>{ props.post }</span>
            <span className='Diary_root__ListOfEntries_item-textContent'>{ props.content }</span>

        </div>
    );
}

export default connect(
    (store) => {
        return {
            choseDiary: store.choseDiary
        };
    },
    (dispatch) => {
        return {
            setEditableRecordId(id) {
                dispatch(setEditableRecordId(id))
            }
        }
    }
)(Note)

