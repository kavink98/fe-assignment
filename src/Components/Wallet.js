import { Paper, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { AddressContext } from "../Utils/AddressContext";
import { getData } from "../Utils/GetData";

export default function (props) {

    const [balance, setBalance] = useState();
    const address = useContext(AddressContext);

    const getBalance = async () => {
        const res = await getData('balance.json');
        setBalance(res.balance);
    }

    useEffect(() => {
        getBalance();
    }, []);

    return (
        <Paper elevation={3} sx={{
            display: "inline-block",
            padding: 2,
            margin: 1
        }}>
            <Typography>
                    <b>Wallet Address: </b> {address}
                </Typography>
                <Typography>
                    <b>Balance: </b> {balance + ' ETH'}
                </Typography>
        </Paper>
    )
}