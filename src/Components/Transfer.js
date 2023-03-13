import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { padding } from "@mui/system";
import React, {useState } from "react";
import Receipt from "./Receipt";

export default function Transfer(props) {

    const fromAddress = "0xDBC05B1ECB4FDAEF943819C0B04E9EF6DF4BABD6";
    const toAddress = "0x721B68FA152A930F3DF71F54AC1CE7ED3AC5F867";

    const [validAmount, setValidAmount] = useState(true);
    const [submitStatus, setSubmitStatus] = useState(false);
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
                    <TextField type='number' id="amount" label="Amount" variant="standard" onChange={handleAmountChange} />
                    <br />
                    <Button variant="contained" sx={{ marginTop: 1 }} onClick={handleSubmit}> Submit </Button>
                    <Button onClick={()=>setCount(count+1)}>{count}</Button>
                </Paper>
            </Grid>

            {submitStatus && <Receipt fromAddress={fromAddress} toAddress={toAddress} />}
        </Grid></React.Fragment>
    )
}