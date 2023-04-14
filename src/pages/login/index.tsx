import React from "react";
import { Grid, TextField, Button, Typography } from "@mui/material";
import { Title } from "../../components/Title";


export const Login = () => {
    return (
        <Grid container justifyContent='center' spacing={4}>

            <Grid item xs={12} sm={12} md={6} lg={3}>
                <Title
                    align="center"
                    variant="h3"
                    color="black"
                >
                    Login!
                </Title>

            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={3} sx={{display: "flex", justifyContent: 'center'}}>
                <TextField
                    variant="standard"
                />

            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={3} sx={{display: "flex", justifyContent: 'center'}}>
                <TextField
                    variant="standard"
                />

            </Grid>
            
            <Grid item xs={12} sm={12} md={12} lg={3} sx={{display: "flex", justifyContent: 'center'}}>
                <Button
                    variant='contained'
                    color='secondary'
                >
                    Log-in
                </Button>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={3} sx={{display: "flex", justifyContent: 'center'}}>
                <Typography
                    variant="subtitle1"
                >
                   Não possui conta? Registre-se!
                </Typography>
            </Grid>

        </Grid>
    )
}