import { action, makeObservable, observable } from "mobx";

interface IComment {
    id: number,
    comment: string,
}

export default class CommentsStore {
    @observable comments: IComment[] = [{ id: 123, comment: 'hello world' }]

    constructor() {
        makeObservable(this);
    }

    @action addComment = (comment: IComment) => this.comments.push(comment);

    @action removeComment = (id: number) => {
        this.comments = this.comments.filter(c => c.id !== id);
    }
}