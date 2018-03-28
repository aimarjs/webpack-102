import React from 'react';
import Image from './images/webpack.png';
import Data from '../data/data';

const HomePage = () => (
	<div className="container">
		<img src={Image} alt="asas" />
		<h1>{Data.headline}!!</h1>
	</div>
);

export default HomePage;
