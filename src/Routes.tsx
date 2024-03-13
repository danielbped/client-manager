import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Clients from './pages/Clients';
import { Box } from '@mui/material';
import Login from './pages/Login';
import Graph from './pages/Graph';

const App = () => (
  <BrowserRouter>
    <Box sx={{ pt: '5rem' }}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/graph" element={<Graph />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
