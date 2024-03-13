import { Box, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import * as echarts from 'echarts';
import { useEffect, useState } from "react";
import ClientService, { Client } from "../services/ClientService";

const Graph = () => {
  const [coordinates, setCoordinates] = useState([]);

  const getClients = async () => {
    const data = await ClientService.listBestRoute();
    return data.result;
  };

  const getClientsCoordinates = async () => {
    const clientsCoordinates = (
      await getClients()
    ).map((client: Client) => client.coordinate.split('.').map((c: string) => Number(c)))
    
    setCoordinates(clientsCoordinates);
  }

  useEffect(() => {
    getClientsCoordinates();
  }, []);

  useEffect(() => {
    generateChart()
  }, [coordinates]);

  const chartOptions = {
    animation: false,
    grid: {
      top: 40,
      left: 50,
      right: 40,
      bottom: 50
    },
    xAxis: {
      name: 'x',
      minorTick: {
        show: true
      },
      minorSplitLine: {
        show: true
      }
    },
    yAxis: {
      name: 'y',
      min: -100,
      max: 100,
      minorTick: {
        show: true
      },
      minorSplitLine: {
        show: true
      }
    },
    dataZoom: [
      {
        show: true,
        type: 'inside',
        filterMode: 'none',
        xAxisIndex: [0],
        startValue: -20,
        endValue: 20
      },
      {
        show: true,
        type: 'inside',
        filterMode: 'none',
        yAxisIndex: [0],
        startValue: -20,
        endValue: 20
      }
    ],
    series: [
      {
        type: 'line',
        showSymbol: false,
        clip: true,
        data: coordinates
      }
    ]
  };

  const generateChart = () => {
    const chartDom = document.getElementById(`routes-chart`) as HTMLElement;

    let myChart = echarts.getInstanceByDom(chartDom)

    if (myChart) {
      myChart.dispose()
    }

    myChart = echarts.init(chartDom)
    myChart.setOption(chartOptions)
  }

  return (
    <Box>
      <Navbar />
      <Box>
        <Typography variant="h4">
          Rotas
        </Typography>
        <Box id='routes-chart' sx={{ width: '100%', height: '100vh' }}></Box>
      </Box>
    </Box>
  );
}

export default Graph;
