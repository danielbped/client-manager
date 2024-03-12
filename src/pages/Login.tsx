import { Container, Paper, Typography, TextField, Button, Snackbar } from '@mui/material';
import UserService from '../services/UserService';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '80vh',
};

const paperStyle = {
  padding: '20px',
  textAlign: 'center',
};

const Login = () => {
  const [openFailSnack, setOpenFailSnack] = useState(false);
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  const handleOpenFailSnack = () => setOpenFailSnack(true);

  const handleCloseFailSnack = (_event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenFailSnack(false);
  };

  const submitLogin = async () => {
    if (login.email === '' || login.password === '') {
      handleOpenFailSnack();
    }

    try {
      const authorized = await UserService.login(login);

      if (authorized) {
        return navigate('/clients');
      }
      return handleOpenFailSnack();
    } catch (err) {
      handleOpenFailSnack();
    }
  };

  const handleLogin = ({ target: { name, value } }: { target: { name: string, value: string } }) => {
    setLogin({...login, [name]: value });
  };

  return (
    <Container style={containerStyle}>
      <Paper sx={paperStyle} elevation={3}>
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>
        <form>
          <TextField
            label="E-mail"
            variant="outlined"
            margin="normal"
            fullWidth
            type="email"
            name="email"
            required
            onChange={ handleLogin }
          />
          <TextField
            label="Password"
            variant="outlined"
            margin="normal"
            fullWidth
            type="password"
            name="password"
            required
            onChange={ handleLogin }
          />
          <Button variant="contained" color="primary" fullWidth onClick={submitLogin}>
            Login
          </Button>
        </form>
      </Paper>
      <Snackbar
        open={ openFailSnack }
        autoHideDuration={ 5000 }
        onClose={ handleCloseFailSnack }
        message="E-mail ou senha inválido."
      />
    </Container>
  );
};

export default Login;
