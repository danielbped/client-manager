import { DataGrid, useGridApiRef, GridColDef } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import ClientService from "../services/ClientService";
import { Button, Modal, Snackbar, TextField, Typography } from "@mui/material";
import { fieldBox, modalStyle, textFieldStyle } from "./styles";
import Navbar from "../components/Navbar";

const Clients = () => {
  const [clients, setClients] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [openSuccessSnack, setOpenSuccessSnack] = useState(false);
  const [openFailSnack, setOpenFailSnack] = useState(false);
  const [client, setClient] = useState({
    name: '',
    email: '',
    phone: '',
    coordinate: '',
  });

  const apiRef = useGridApiRef();
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  const handleOpenSuccessSnack = () => setOpenSuccessSnack(true);
  const handleOpenFailSnack = () => setOpenFailSnack(true);

  const handleCloseFailSnack = (_event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenFailSnack(false);
  };

  const handleSuccessFailSnack = (_event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSuccessSnack(false);
  };

  const handleSearch = async ({ target: { value } }: { target: { value: string } }) => {
    if (value.length > 1) {
      try {
        const data = await ClientService.filter(value);
        setClients(data.result);
      } catch (err) {
        console.error(err);
        setClients([]);
      }
    } else {
      getClients();
    }
  };

  const getClients = async () => {
    const data = await ClientService.list();
    setClients(data.result);
  };

  const handleClient = ({ target: { name, value } }: { target: { name: string, value: string } }) => {
    setClient({...client, [name]: value });
  };

  const save = async () => {
    try {
      await ClientService.create(client);
      await getClients();
      handleCloseModal();
      handleOpenSuccessSnack();
    } catch (e) {
      handleOpenFailSnack();
      console.error(e);
    }
  };

  useEffect(() => {
    getClients();
  }, []);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 400 },
    {
      field: "name",
      headerName: "Nome",
      width: 300,
      editable: true,
    },
    {
      field: "email",
      headerName: "E-mail",
      width: 300,
      editable: true,
    },
    {
      field: "phone",
      headerName: "Telefone",
      width: 300,
      editable: true,
    },
    {
      field: "coordinate",
      headerName: "Coordenada",
      width: 100,
      editable: true,
    },
  ];

  return (
    <Box>
      <Navbar />
      <Box sx={{ width: '100%', height: 'calc(100vh - 10rem)' }}>
        <Box sx={{ margin: '.5rem 1rem 1rem 1rem', display: 'flex', justifyContent: 'end' }}>
          <TextField
            id="filled-search"
            label="Pesquisar"
            type="search"
            onChange={ handleSearch }
            placeholder="Nome ou E-mail"
          />
          <Button variant="contained" onClick={ handleOpenModal } sx={{ ml: '2rem' }}>
            Novo Cliente
          </Button>
        </Box>
        <Modal
          open={ openModal }
          onClose={ handleCloseModal }
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={ modalStyle }>
            <Box>
              <Typography>
                Novo Cliente
              </Typography>
              <Box sx={ fieldBox }>
                <TextField
                  required
                  id="outlined-required"
                  label="Nome Completo"
                  placeholder="Digite o nome do cliente"
                  name="name"
                  sx={ textFieldStyle }
                  onChange={ handleClient }
                />
                <TextField
                  required
                  id="outlined-required"
                  label="E-mail"
                  name="email"
                  placeholder="Digite o e-mail do cliente"
                  sx={ textFieldStyle }
                  onChange={ handleClient }
                />
              </Box>
              <Box sx={ fieldBox }>
                <TextField
                  required
                  id="outlined-required"
                  label="Telefone"
                  name="phone"
                  placeholder="Ex.: 99 9 99999-9999"
                  sx={ textFieldStyle }
                  onChange={ handleClient }
                />
                <TextField
                  required
                  id="outlined-required"
                  label="Coordenadas"
                  name="coordinate"
                  placeholder="Ex.: 0.0"
                  sx={ textFieldStyle }
                  onChange={ handleClient }
                />
              </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'end', pt: '1rem' }}>
              <Button variant="contained" onClick={ save }>Salvar</Button>
            </Box>
          </Box>
        </Modal>
        {clients.length && (
          <DataGrid
            apiRef={apiRef}
            rows={clients}
            columns={columns}
          />
        )}
        <Snackbar
          open={ openSuccessSnack }
          autoHideDuration={ 5000 }
          onClose={ handleSuccessFailSnack }
          message="Cliente salvo!"
        />
        <Snackbar
          open={ openFailSnack }
          autoHideDuration={ 5000 }
          onClose={ handleCloseFailSnack }
          message="Ocorreu um erro ao salvar o cliente."
        />
      </Box>
    </Box>
  );
};

export default Clients;
