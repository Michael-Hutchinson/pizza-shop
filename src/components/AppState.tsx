import React, { createContext, useContext, useState } from 'react';

interface AppStateValue {
  cart: {
    items: {id: number; name: string; price: number;}[]
  }
}

const defaultStateValue: AppStateValue = {
  cart: {
    items: []
  }
}

export const AppStateContext = createContext(defaultStateValue);

export const AppSetStateContext = createContext<React.Dispatch<React.SetStateAction<AppStateValue>> | undefined>(undefined);

export const useSetState = () => {
  const setState = useContext(AppSetStateContext);
  if (!setState) {
    throw new Error('FFS ERROR');
  }
  return setState;
}

// eslint-disable-next-line react/function-component-definition
const AppStateProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(defaultStateValue);
  return (
    <AppStateContext.Provider value={state}>
      <AppSetStateContext.Provider value={setState}>
        {children}
      </AppSetStateContext.Provider>
    </AppStateContext.Provider>
  )
}

export default AppStateProvider