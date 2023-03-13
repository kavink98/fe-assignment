import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { padding } from "@mui/system";
import React, {useContext, useEffect, useState } from "react";
import Receipt from "./Receipt";
import { AddressContext } from "../Utils/AddressContext";

export default function Transfer({address, setSubmitStatus, submitStatus}) {

    const fromAddress = useContext(AddressContext);
    const toAddress = address;

    const [validAmount, setValidAmount] = useState(true);
    const [transferAmount, setTransferAmount] = useState();
    const [count, setCount] = useState(0);

    const handleAmountChange = (e) => {
        setTransferAmount(parseInt(e.target.value));
    }

    const handleSubmit = () => {
        setSubmitStatus(true);
    }

    return (
        <React.Fragment>
        <Grid container direction="column" sx={{ display: "inline-block" }}>
            <Grid item>
                <Paper elevation={3} sx={{
                    display: "inline-block",
                    padding: 2,
                    margin: 1
                }}>
                    <Typography>
                        <b>From:</b> {fromAddress}
                    </Typography>
                    <Typography>
                        <b>To:</b> {toAddress}
                    </Typography>
                    <TextField type='number' id="amount" label="Amount" variant="standard" onChange={handleAmountChange} disabled={submitStatus} />
                    <br />
                    <Button variant="contained" sx={{ marginTop: 1 }} onClick={handleSubmit} disabled={submitStatus}> Submit </Button>
                </Paper>
            </Grid>
        </Grid></React.Fragment>
    )
}