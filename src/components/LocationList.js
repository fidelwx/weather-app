import React from 'react';
import WeatherLocation from './WeatherLocation';
import PropTypes from 'prop-types'
const LocationList = ({cities}) =>{
	console.log(cities);
	return (
	<div>
		<WeatherLocation city="Caracas,ve" />
		<WeatherLocation city="Buenos Aires,ar" />
		<WeatherLocation city="Bogota,col" />
	</div>);
};

LocationList.propTypes = {
	cities: PropTypes.array.isRequired, 
};

export default LocationList;