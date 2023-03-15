import Address from './Address';
import Wallet from './Wallet';
import History from './History';
import { Box, Tab, Tabs } from '@mui/material';
import { Fragment, useState } from 'react';

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

export default function Home(props) {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    return (
        <Fragment>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Address" {...a11yProps(0)} />
                    <Tab label="Wallet" {...a11yProps(1)} />
                    <Tab label="Transaction History" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <Address />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Wallet />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <History />
            </TabPanel>
        </Fragment>
    );
}