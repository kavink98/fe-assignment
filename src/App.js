import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useState } from 'react';
import { Box, Tab, Tabs} from '@mui/material';
import { AddressContext } from './Utils/AddressContext';
import Address from './Components/Address';
import Wallet from './Components/Wallet';
import { History } from './Components/History';

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

function App() {

  const [value, setValue] = useState(0)

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

    <div className="App">
      <AddressContext.Provider value="0xDBC05B1ECB4FDAEF943819C0B04E9EF6DF4BABD6">
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
      </AddressContext.Provider>
    </div>
  );
}

export default App;
