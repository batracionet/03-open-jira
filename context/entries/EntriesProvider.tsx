import { FC, useReducer } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { Entry } from '../../interfaces';
import { EntriesContext ,entriesReducer} from './';

export interface EntriesState {
     entries:Entry[];

   }
type Props = {
    children?: React.ReactNode
};

   const ENTRIES_INITIAL_STATE: EntriesState = {
    entries:[
        {
            _id: uuidv4(),
            description:'pending Proident una',
            status:'pending',
            createdAt: Date.now(),
        },
        {
            _id: uuidv4(),
            description:'in-progress Proident dos',
            status:'in-progress',
            createdAt: Date.now() - 1000000,
        },
        {
            _id: uuidv4(),
            description:'finished Proident tres',
            status:'finished',
            createdAt: Date.now() - 100000,
        }
    ],
   }

export const EntriesProvider:FC<Props> = ({ children }) => {

const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE)

const addNewEntry = (description:string) => {

    const newEntry: Entry ={
        _id: uuidv4(),
        description: description,
        createdAt: Date.now(),
        status: 'pending'
    }

    dispatch({type: "[Entry] Add-Entry", payload:newEntry})

}

   return (
     <EntriesContext.Provider value={{
        ...state,

        //Methods
        addNewEntry,
     }}>
         {children}
     </EntriesContext.Provider>
  )
};