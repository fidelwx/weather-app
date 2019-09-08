import React from 'react';
import LocationList from './components/LocationList';
import './App.css';

const cities = [
	'Caracas,ve',
	'Buenos Aires,ar',
	'Bogota,col',
	'Washington,us',
	'Madrid,es'
];

function App() {
  return (
    <div className="App">
      <LocationList cities={cities} />
    </div>
  );
}

export default App;
