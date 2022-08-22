
import { useContext } from 'react';
import { StoreContext } from './StoreProvider';

export function useCommentsStore() {
    const rootStore = useContext(StoreContext);

    if (!rootStore) {
        throw new Error("Check if wrapped with StoreProvider");
    }

    return rootStore.commentsStore;
}