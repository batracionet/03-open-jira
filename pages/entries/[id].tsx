import { ChangeEvent, useState } from "react";
import { capitalize, Grid, Card, CardHeader, CardContent, TextField, CardActions, Button, FormControl, FormLabel,FormControlLabel, RadioGroup, Radio, IconButton} from "@mui/material";

import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';


import { Layout } from "../../components/layouts";
import { EntryStatus } from '../../interfaces';


const validStatus: EntryStatus[] =['pending','in-progress','finished']


export const EntryPage = () => {

    const [inputValue, setInputValue] = useState('');
    const [status, setStatus] = useState<EntryStatus>('pending');
    const [touched, setTouched] = useState(false);

    const onInputValueChanged = (event:ChangeEvent<HTMLInputElement>) => {        
        setInputValue(event.target.value);
    }

    const onStatusChanged = (event:ChangeEvent<HTMLInputElement>) =>{

        // setStatus(event.target.value as EntryStatus) 
        // con esto suplanto el Switch y es lo mismo

        switch (event.target.value) {
            
            case 'pending':
                setStatus('pending') 
                break;
            case 'in-progress':
                setStatus('in-progress') 
                break;
            case 'finished':
                setStatus('finished') 
                break;
        
            default:
                break;
        }

 
    }

    const onSave = () =>{

        
    }



  return (
    
    <Layout title=".......">

        <Grid
            container
            justifyContent="center"
            sx={{marginTop:2}}
        >
            <Grid item xs={12} sm={8} md={6}>
                <Card>
                    <CardHeader
                        title={`Entrada: ${inputValue}`}
                        subheader={`Creada hace poco`}
                    
                    />

                    <CardContent>
                        <TextField
                            sx={{marginTop:2, marginBottom:1}}
                            fullWidth
                            placeholder="Nueva entrada"
                            autoFocus
                            multiline
                            label="Nueva entrada"
                            value={inputValue}
                            onChange={onInputValueChanged}
                        
                        />
                        <FormControl>
                            <FormLabel>
                                Estado:
                            </FormLabel>
                            <RadioGroup
                                row
                                value={status}
                                onChange={onStatusChanged}
                            >
                               {validStatus.map(option => (
                                   <FormControlLabel
                                        key={option}
                                        value={option}
                                        control={<Radio />}
                                        label={capitalize(option)}
                                   
                                   />
                               ))}
                            </RadioGroup>
                        </FormControl>
                    </CardContent>
                    <CardActions>
                        <Button
                            startIcon={<SaveOutlinedIcon />}
                            variant="contained"
                            fullWidth
                            onClick={onSave}   
                        >
                            Save
                        </Button>
                    </CardActions>


                </Card>

            </Grid>
            
        </Grid>

        <IconButton
            sx={{
                position:'fixed',
                bottom:30,
                right:30,
                backgroundColor:'error.dark'
            }}
        
        >
            <DeleteOutlinedIcon />
        </IconButton>

    </Layout>
  )
}

export default EntryPage;