import { Button, Menu, MenuItem, Typography } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { getData } from "./Utils/GetData";

export default function Address(props) {

    const [addressList, setAddressList] = useState([]);
    const [transferAddress, setTransferAddress] = useState();
    const [listOpen, setListOpen] = useState(false)

    const getAddresses = async () => {
        const res = await getData('addresses.json');
        setAddressList(res);
    }

    useEffect(() => {
        getAddresses();
    }, [])

    const handleClick = (event) => {
        setListOpen(true);
        setTransferAddress(event.currentTarget);
      };

    const handleClose = () => {
        setListOpen(false)
    }

    return (
        <Fragment>
            <Button
                id="basic-button"
                aria-controls={listOpen ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={listOpen ? 'true' : undefined}
                onClick={handleClick}
            >
                Select Address
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={transferAddress}
                open={listOpen}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
               {addressList.map((address => (
                <MenuItem onClick={handleClose}>{address}</MenuItem>
               )))}
            </Menu>
        </Fragment>
    )

}