import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import ClientService from "../services/ClientService";

const Clients = () => {
  const [clients, setClients] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    (async () => {
      const data = await ClientService.list();
      setClients(data.result);
      setCount(data.count);
    })();
  }, []);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 400 },
    {
      field: "name",
      headerName: "Nome",
      width: 400,
      editable: true,
    },
    {
      field: "email",
      headerName: "E-mail",
      width: 400,
      editable: true,
    },
    {
      field: "phone",
      headerName: "Telefone",
      width: 400,
      editable: true,
    },
  ];

  return (
    <Box sx={{ width: '100%', height: 'calc(100vh - 5rem)' }}>
      {clients.length && (
        <DataGrid
          rows={clients}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: count,
              },
            },
          }}
        />
      )}
    </Box>
  );
};

export default Clients;
