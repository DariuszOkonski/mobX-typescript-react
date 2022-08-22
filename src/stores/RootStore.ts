import { observable } from "mobx";
import CommentsStore from './CommentsStore';


export default class RootStore {
    @observable commentsStore;

    constructor() {
        this.commentsStore = new CommentsStore();
    }
}