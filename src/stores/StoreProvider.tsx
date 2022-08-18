import React, { createContext, FC } from 'react'
import RootStore from './RootStore';

const rootStore = new RootStore();

export const StoreContext = createContext<RootStore>(rootStore);

interface StoreProviderProps {
    children: JSX.Element
}
 
const StoreProvider: FC<StoreProviderProps> = ({children}) => {
    return (
        <StoreContext.Provider value={rootStore}>
            {children}
        </StoreContext.Provider>
    );
}
 
export default StoreProvider;
