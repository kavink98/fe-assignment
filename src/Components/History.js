import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { getData } from "../Utils/DataHandler";

export default function History(props) {

    const [transactionHistory, setTransactionHistory] = useState(null);

    const getTransactionHistory = async () => {
        const res = await getData('/transactions')
        res.sort((a, b) => a.timestamp > b.timestamp)
        setTransactionHistory(res);
    }

    useEffect(() => {
        getTransactionHistory();
    }, []);

    return (
        <Box sx={{ flexWrap: 'wrap' }}>
            {transactionHistory && transactionHistory.map((transaction) => (
                <Paper elevation={3} sx={{
                    display: "inline-block",
                    padding: 2,
                    margin: 1
                }}>
                    <Typography>
                        <b>Transaction Hash: </b> {transaction.transactionHash}
                    </Typography>
                    <Typography>
                        <b>Status: </b> {transaction.status}
                    </Typography>
                    <Typography>
                        <b>Timestamp: </b> {new Date(transaction.timestamp).toISOString()}
                    </Typography>
                    <Typography>
                        <b>From: </b> {transaction.fromAddress}
                    </Typography>
                    <Typography>
                        <b>To: </b> {transaction.toAddress}
                    </Typography>
                    <Typography>
                        <b>Amount: </b> {transaction.amount}
                    </Typography>
                </Paper>
            ))}
        </Box>
    )
}