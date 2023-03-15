import { Box, Typography } from "@mui/material"
import { Fragment, useContext } from "react"
import { AddressContext } from "../Utils/AddressContext"

export default function Login () {

    const address = useContext(AddressContext);

    return (
        <Box sx={{
            padding: 2,
            margin: 1
        }}>
            <Typography>
                Login Feature Coming Soon
            </Typography>
            <Typography>
                Your current static wallet address is {address}
            </Typography>
        </Box>
    )
}