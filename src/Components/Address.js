import { Autocomplete, Button, Grid, Menu, MenuItem, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Fragment, useEffect, useState } from "react";
import Receipt from "./Receipt";
import Transfer from "./Transfer";
import { getData } from "../Utils/GetData";

const ITEM_HEIGHT = 200;

export default function Address(props) {

    const [addressList, setAddressList] = useState([]);
    const [transferAddress, setTransferAddress] = useState();
    const [reset, setReset] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(false);

    const getAddresses = async () => {
        const res = await getData('addresses.json');
        setAddressList(res);
    }

    useEffect(() => {
        getAddresses();
    }, [])

    const handleNewTransfer = () => {
        setAddressList([]);
        setTransferAddress(null);
        setSubmitStatus(false);
        setReset((curr)=>!curr);
    };


    return (
        <Box sx={{ flexDirection: 'column' }}>
            <Autocomplete
                disablePortal
                id="select-address"
                options={addressList}
                sx={{ width: 500 }}
                renderInput={(params) => <TextField {...params} label="Address" />}
                onChange={(event, address) => setTransferAddress(address)}
                disabled={submitStatus}
            />
            {transferAddress && <Transfer address={transferAddress} setSubmitStatus={setSubmitStatus} submitStatus={submitStatus} />}
            {submitStatus && <Fragment>
                <Receipt toAddress={transferAddress} />
                <Button onClick={handleNewTransfer}>New Transfer</Button>
            </Fragment>}
        </Box>
    )

}