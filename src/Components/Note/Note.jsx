import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';

let choseDiary = null;

export default connect(
    (store) => {
        return {
            choseDiary: store.choseDiary
        };
    }
)(
    function Note(props) {
        let [textContent, setStateText] = useState('');

        useEffect(() => {
            if (choseDiary !== props.choseDiary) {
                choseDiary = props.choseDiary;
                fetch(`/diary-item?id=${props.choseDiary}`).then(el => el.text())
                    .then(
                        textContent => {
                            setStateText(textContent)
                        }
                    )
            }
        });

        return (
            <textarea
                className='Diary_note'
                onChange={ event => setStateText(event.target.value) }
                value={ textContent }
            />
        );
    }
)