import React from 'react';
import WeatherLocation from './WeatherLocation';

const LocationList = () =>(
	<div>
		<WeatherLocation city="Caracas,ve" />
		<WeatherLocation city="Buenos Aires,ar" />
		<WeatherLocation city="Bogota,col" />
	</div>
);

export default LocationList;