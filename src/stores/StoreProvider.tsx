import React, { createContext } from 'react'
import RootStore from './RootStore';

interface IStoreProvider {
    children: JSX.Element
}

const rootStore = new RootStore();

export const StoreContext = createContext(rootStore);

const StoreProvider = ({ children }: IStoreProvider) => {

    return (
        <StoreContext.Provider value={rootStore}>
            {children}
        </StoreContext.Provider>
    )
}
export default StoreProvider;