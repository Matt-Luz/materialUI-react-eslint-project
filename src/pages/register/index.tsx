import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import { Title } from '../../components/Title';

export const Register = () => {
    return (
    <Grid container spacing={4}>
        
        <Grid item xs={12}>
            <Title
                variant='h1'
                align='center'
            >
                Registre-se
            </Title>
        </Grid>

        <Grid item xs={12} sx={{display: "flex", justifyContent: 'center'}}>
            <TextField
                variant="standard"
            >

            </TextField>
        </Grid>

        <Grid item xs={12} sx={{display: "flex", justifyContent: 'center'}}>
            <TextField
                variant="standard"
            >

            </TextField>
        </Grid>

        <Grid item xs={12} sx={{display: "flex", justifyContent: 'center'}}>
            <TextField
                variant="standard"
            >

            </TextField>

        </Grid>

        <Grid item xs={12} sx={{display: "flex", justifyContent: 'center'}}>
            <Button
                variant="contained"
                color="primary"
            >
                Cadastre-se
            </Button>

        </Grid>

    </Grid>
    )
}