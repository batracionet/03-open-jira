import { FC, useReducer } from 'react';
import { UIContext ,uiReducer} from './';

type Props = {
  children?: React.ReactNode
};

export interface UIState {
     sideMenuOpen:boolean;
     isAddingEntry:boolean;
     isDragging: boolean;

   }

   const UI_INITIAL_STATE: UIState = {
     sideMenuOpen:false,
     isAddingEntry:false,
     isDragging: false,
   }

export const UIProvider:FC<Props> = ({ children }) => {

const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

const openSideMenu = () =>{

  dispatch({type: 'UI - Open Sidebar'})

}

const closeSideMenu = () =>{

  dispatch({type: 'UI - Close Sidebar'})

}

const startDragging = () =>{

  dispatch({type: 'UI - Start Dragging'})

}

const endDragging = () =>{

  dispatch({type: 'UI - End Dragging'})

}

const setIsAddingEntry = (isAddingEntry:boolean) =>{

  dispatch({type: 'UI - Set Adding Entry' ,payload:isAddingEntry })

}

   return (
     <UIContext.Provider value={{
      ...state,

      //Methods
      openSideMenu,
      closeSideMenu,
      
      setIsAddingEntry,

      startDragging,
      endDragging,
     }}>
         { children }
     </UIContext.Provider>
  )
};