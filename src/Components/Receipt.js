import { Grid, Paper, Typography } from "@mui/material";
import { useContext } from "react";
import { AddressContext } from "../Utils/AddressContext";

export default function Receipt({toAddress}) {

    const fromAddress = useContext(AddressContext);

    const transactionHash = "F1951437AF56035A597377CAEF1787138904E24AD71330F59B88C147D26AF20C";
    const blockHash = "3FD87FA43712D341358127B2ADFA4BD79508B22A837F60977119942D71C6EAE5";
    const blockNumber = 34;
    const gas = 20000;

    return (
        <Grid item>
            <Paper elevation={3} sx={{
                display: "inline-block",
                padding: 2,
                margin: 1
            }}>
                <Typography variant="h3" sx={{marginBottom: 1}}>
                    Receipt
                </Typography>
                <Typography>
                    <b>Transaction Hash: </b> {transactionHash}
                </Typography>
                <Typography>
                    <b>Block Hash: </b> {blockHash}
                </Typography>
                <Typography>
                    <b>Block Number: </b> {blockNumber}
                </Typography>
                <Typography>
                    <b>From: </b> {fromAddress}
                </Typography>
                <Typography>
                    <b>To: </b> {toAddress}
                </Typography>
                <Typography>
                    <b>Gas Used: </b> {gas}
                </Typography>
            </Paper>
        </Grid>
    )
}