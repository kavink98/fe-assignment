import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useState } from 'react';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { AddressContext } from './Utils/AddressContext';
import Home from './Components/Home';
import { Link, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';

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
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Blockchain Explorer
              </Typography>
              <Button component={Link} color="inherit" to="/">Home</Button>
              <Button component={Link} color="inherit" to="/login">Login</Button>
            </Toolbar>
          </AppBar>
        </Box>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AddressContext.Provider>
    </div>
  );
}

export default App;
