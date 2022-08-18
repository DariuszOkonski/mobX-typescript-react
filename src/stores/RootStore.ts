import CommentStore from "./CommentsStore";

export default class RootStore {
    commentStore: CommentStore;

    constructor() {
        this.commentStore = new CommentStore();
    }
}