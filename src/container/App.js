import React, { useState, useEffect } from 'react';
import axios from 'axios';
import getAddresses from '../getAddresses';
import googleMapsApi, { API_KEY } from '../api/googleMapsApi';
import getStateFromResults from '../getStateFromResults';
import Table from './Table';

const getUrl = (user) =>
  `/geocode/json?address=${user.postalCode}+${user.city}+Germany&key=${API_KEY}`;

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/data/testdaten.txt').then((response) => {
      const users = getAddresses(response.data);
      setData(users);

      users.forEach((user) => {
        googleMapsApi.get(getUrl(user)).then((response) => {
          user.federalState = getStateFromResults(response.data.results);
          setData([...users]); // force re-render
        });
      });
    });
  }, []);

  return <Table users={data} />;
};

export default App;
