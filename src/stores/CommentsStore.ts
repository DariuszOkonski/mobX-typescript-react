import { action, makeObservable, observable } from "mobx";

export interface IComment {
    id: number;
    comment: string;
}

export default class CommentStoreImp {
    @observable comments: IComment[] = [{
        id: 123,
        comment: 'Super ksiazka'
    },
    {
        id: 124,
        comment: 'Hello world'
    }
    ];

    constructor() {
        makeObservable(this)
    }

    @action addComment = (comment: IComment) => this.comments.push(comment);
    @action removeComment = (id: number) => {
        console.log('remove comment: ' + id)
        this.comments = this.comments.filter(comment => comment.id !== id);
        console.log(this.comments)
    }
}