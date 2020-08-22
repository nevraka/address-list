import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import getAddresses from '../getAddresses';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/data/testdaten.txt').then((response) => {
      const addresses = getAddresses(response.data);
      setData(addresses);
    });
  }, []);

  return (
    <div>
      {data.map((doctor) => {
        return doctor.name;
      })}
    </div>
  );
};

export default App;
