import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';
import Clients from './pages/Clients';
import Navbar from './components/Navbar';
import { Box } from '@mui/material';

const Routes = () => (
  <BrowserRouter>
  <Box sx={{ pt: '5rem' }}>
    <Navbar />
    <Switch>
      <Route path="/clients" element={ <Clients/> } />
    </Switch>
  </Box>
  </BrowserRouter>
)

export default Routes;