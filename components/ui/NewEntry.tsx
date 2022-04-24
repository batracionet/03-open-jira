import { ChangeEvent, useState, useContext } from 'react';

import { Button, Box, TextField } from "@mui/material"
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { EntriesContext } from '../../context/entries';



export const NewEntry = () => {

    const {addNewEntry} = useContext(EntriesContext)

    const [isAdding, setisAdding] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [touched, setTouched] = useState(false);

    const onTextFieldChanged = (event:ChangeEvent<HTMLInputElement>) => {

        setInputValue(event.target.value);


    }

    const onSave = () =>{

        if (inputValue.length === 0) return;

        addNewEntry(inputValue);
        
        setisAdding(false);
        setTouched(false);
        setInputValue('');
    }

  return (
    <Box
        sx={{ marginBottom:2, paddingX:2 }}
    >
    {

        isAdding ? (
            <>
            <TextField 
                fullWidth
                sx={{ marginTop: 2, marginBottom:1 }}
                placeholder='Nueva Entrada'
                autoFocus
                multiline
                label='Nueva Entrada'
                helperText={inputValue.length<=0 && touched && 'Ingrese un valor'}
                error={inputValue.length<=0 && touched}
                value={inputValue}
                onChange={onTextFieldChanged}
                onBlur={()=>setTouched(true)}
            />

            <Box display='flex' justifyContent='space-between'>
            <Button
                variant='text'
                onClick={()=> setisAdding(false)}
                
            >
                Cancelar
            </Button>

            <Button
                variant='outlined'
                color='secondary'
                endIcon={<SaveOutlinedIcon />}
                onClick={onSave}
            >
                Guardar
            </Button>
            </Box>


            </>
        ) : (

            <>
            <Button
                fullWidth
                variant='outlined'
                startIcon={<AddCircleOutlineOutlinedIcon />}
                onClick={()=> setisAdding(true)}
            >

                Agregar Tarea
            </Button>
            </>
            
        
        )
    
    }
    
    </Box>
    
    
  )
}

