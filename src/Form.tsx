import React, { FC, useState } from 'react'
import { useCommentsStore } from './stores/hooks';
import { IComment } from './stores/CommentsStore';
import { observer } from 'mobx-react';

 
const Form: FC = () => {
    const [inputData, setInputData] = useState<string>('')

    const { addComment } = useCommentsStore();

    const handleOnChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
        setInputData(event.target.value)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if(!inputData) {
            return
        }

        const newComment: IComment = {
            id: new Date().getMilliseconds(),
            comment: inputData
        }
        addComment(newComment)
        setInputData("")
    }

    return (
        <form onSubmit={(event) => handleSubmit(event)}>
            <label>
                Add Comment:
                <br />
                <input type="text" value={inputData} onChange={(event) => handleOnChange(event)} />
                <button>submit</button>
            </label>
        </form>
    );
}

export default observer(Form);