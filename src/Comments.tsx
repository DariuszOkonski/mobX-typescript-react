import React, { FC } from 'react'
import { useCommentsStore } from './stores/hooks';
import { observer } from 'mobx-react';


const Comments = () => {
    const { comments, removeComment } = useCommentsStore();
    
    const commentsElements = comments.map(item => (
        <li key={item.id}>
            <span>{item.comment}</span> -  
            <button 
                onClick={() => handleClick(item.id)}
                >remove</button>
        </li>
    ))
    
    const handleClick = (id: number) => {
        removeComment(id)
    }
    
    return (
        <ul>
            { commentsElements }
        </ul>
    );
}
 
export default observer(Comments);