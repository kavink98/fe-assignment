import { Grid, Paper, Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { AddressContext } from "../Utils/AddressContext";

export default function Receipt({ transactionData }) {

    useEffect(() => {
        console.log(transactionData);
    })

    return (
        <Grid item>
            <Paper elevation={3} sx={{
                display: "inline-block",
                padding: 2,
                margin: 1
            }}>
                <Typography variant="h3" sx={{ marginBottom: 1 }}>
                    Receipt
                </Typography>
                <Typography>
                    <b>Transaction Hash: </b> {transactionData.transactionHash}
                </Typography>
                <Typography>
                    <b>Block Hash: </b> {transactionData.blockHash}
                </Typography>
                <Typography>
                    <b>Block Number: </b> {transactionData.blockNumber}
                </Typography>
                <Typography>
                    <b>From: </b> {transactionData.fromAddress}
                </Typography>
                <Typography>
                    <b>To: </b> {transactionData.toAddress}
                </Typography>
                <Typography>
                    <b>Gas Used: </b> {transactionData.gasUsed}
                </Typography>
            </Paper>
        </Grid>
    )
}