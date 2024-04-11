import { useState } from "react";
import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { CSSProperties } from "react";
import { getfinancialTerms } from "../api/getFinancialTerms";


export const FinancialTermsPage = () => {

    const [result, setResult] = useState<string>("")
    const [input, setInput] = useState<string>("")

    const getFinancialTermsFromText = () => {
        getfinancialTerms(input).then(async res => {
            const data = await res.text()
            setResult(data)
        })
    }

    return (
        <React.Fragment>
            <Box sx={{ width: '100%', height: '100%' }}>
                <Card variant="outlined" style={padding20}>
                    <div style={divStyle}>
                        <Stack spacing={2}>
                            <Typography variant="h4" color="#0288d1" component="div">Extarct Financial terms from text</Typography>
                            <TextField multiline fullWidth rows={6} label="Input Article" id="fullWidth" onChange={(val) => setInput(val.target.value)} />
                            <Button variant="outlined" size="large" onClick={() => getFinancialTermsFromText()}>Extract</Button>
                        </Stack>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: result }}></div>
                </Card>
            </Box>
        </React.Fragment>
    )
};

const divStyle: CSSProperties = {
    width: 1000,
}

const padding20: CSSProperties = {
    padding: 20,
    height: "auto"
}