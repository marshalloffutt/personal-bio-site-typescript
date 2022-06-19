import React from 'react';
import Button from '@mui/material/Button';
import './App.scss';

function App() {
  return (
    <div className="App">
			<h1 className="black">Black</h1>
			<h1 className="gray">Gray</h1>
			<h1 className="lightGray">Light Gray</h1>
			<h1 className="lighterGray">Lighter Gray</h1>
			<h1 className="accent">Accent</h1>
			<Button variant="contained">I am a button</Button>
    </div>
  );
}

export default App;
