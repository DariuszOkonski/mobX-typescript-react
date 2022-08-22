import { computed, action, makeObservable, observable } from "mobx";

export interface IComment {
    id: number,
    comment: string,
}

export interface IStatus {
    allTasks: number;
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

    @computed get status(): IStatus {
        const allTasks = this.comments.length;
        return {
            allTasks
        }
    }
}