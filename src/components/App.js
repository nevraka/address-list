import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [textData, setTextData] = useState('');

  useEffect(() => {
    axios.get('/data/testdaten.txt').then((response) => {
      setTextData(response.data);
    });
  }, []);

  return <div>{textData}</div>;
};

export default App;
