import React,{ useState, useEffect } from 'react';
import './App.css';

import Preguntas from './components/preguntas.js';


const url = 'http://localhost:3000/preguntas';

function App() {
  const [preguntas, setPreguntas] = useState([]);

  const fetchPreguntas = async () => {
    try {
      const response = await fetch(url);

      const preguntas = await response.json();
      setPreguntas(preguntas);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchPreguntas();
  }, []);

  return (
    <div className="App">
      <Preguntas preguntas={preguntas} />
    </div>
  );
}

export default App;
