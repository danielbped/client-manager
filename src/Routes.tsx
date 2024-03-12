import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Clients from './pages/Clients';
import { Box } from '@mui/material';
import Login from './pages/Login';

const App = () => (
  <BrowserRouter>
    <Box sx={{ pt: '5rem' }}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/clients" element={<Clients />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
