import React from 'react';
import { Title } from '../../components/Title';

const Welcome: React.FC = () => {
	return (
		<>
			<Title 
				variant='h1'
				align='center'
				color='red'
				isBlue={false}
			>

				Welcome Dev!

			</Title>
		</>
	);
};

export default Welcome;
