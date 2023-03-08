import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { padding } from "@mui/system";
import { Fragment, useState } from "react";
import Receipt from "./Receipt";

export default function Transfer(props) {

    const fromAddress = props.fromAddress;
    const toAddress = props.toAddress;

    const [validAmount, setValidAmount] = useState(true);
    const [submitStatus, setSubmitStatus] = useState(false);
    const [transferAmount, setTransferAmount] = useState();

    const handleAmountChange = (e) => {
        setTransferAmount(parseInt(e.target.value));
    }

    const handleSubmit = () => {
        setSubmitStatus(true);
    }

    return (
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
                </Paper>
            </Grid>

            {submitStatus && <Receipt fromAddress={fromAddress} toAddress={toAddress} />}
        </Grid>
    )
}