import { useContext } from "react";
import { StoreContext } from './StoreProvider';


export function useCommentsStore() {
    const rootStore = useContext(StoreContext)

    if (!rootStore) {
        throw new Error("Nie znalezione RootStore, sprawdz czy masz provider który go dostarcza")
    }

    return rootStore.commentStore;
}