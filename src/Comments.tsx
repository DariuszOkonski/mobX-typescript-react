import React, { FC } from 'react'
import { observer } from 'mobx-react';
import { useCommentsStore } from './stores/hooks';

interface CommentsProps {
    
}

const Comments: FC<CommentsProps> = () => {
    const { comments, removeComment } = useCommentsStore();    

    const handleOnClick = (id: number) => {
        removeComment(id);
    }

    return (
        <ul>
            {
                comments.map(item => (
                    <li 
                        style={{ display: 'flex'}}
                        key={item.id}
                    >
                        <span style={{ display: 'inline-block', margin: '10px'}}>{item.comment} </span> 
                        <button onClick={() => handleOnClick(item.id)}>remove</button>
                    </li>
                ))
            }
        </ul>
    );
}
 
export default observer(Comments);