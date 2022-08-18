import React, { FC, useState } from 'react'
import { IComment } from './stores/CommentsStore';
import { useCommentsStore } from './stores/hooks';
import { observer } from 'mobx-react';

const Forms = () => {
    const [inputData, setInputData] = useState<string>('')

    const { addComment } = useCommentsStore()

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputData(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const comment: IComment = {
            id: Date.now(),
            comment: inputData,
        }

        addComment(comment)

        setInputData('');
    }

    return (
        <form onSubmit={(event) => handleSubmit(event)}>
            <label>
                Wpisz komentarz:
                <br />
                <input 
                    type="text" 
                    value={inputData}
                    onChange={(event) => handleOnChange(event)}
                />
            </label>
            <button>submit</button>
        </form>
    );
}
 
export default observer(Forms);