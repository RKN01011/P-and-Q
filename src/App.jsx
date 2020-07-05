import React, {Component} from 'react';

import Note from './Components/Note/Note'
import RecordItem from "./Components/RecordItem/RecordItem";

import './App.sass';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            diaryList: null
        }
    }

    componentWillMount() {
        if (!this.state.diaryList) this.getAllDiary();
    }

    async getAllDiary() {
        this.setState({
            diaryList: await fetch('/diary-list').then(el => el.json())
        })
    }


    render() {
        if (this.state.diaryList) {
            return (
                <div className='Diary_root'>

                    <div
                        className='Diary_root__ListOfEntries'>
                        {
                            this.state.diaryList.map(
                                post => (
                                    <RecordItem
                                        idPost={ post.id }
                                        post={ post.head }
                                    />
                                )
                            )
                        }
                    </div>

                    <div className='Diary_root__writeZone'>
                        <Note text={ 123 } />
                    </div>

                </div>
            );
        } else {
            return <div className='Diary_root'/>
        }
    }
}
