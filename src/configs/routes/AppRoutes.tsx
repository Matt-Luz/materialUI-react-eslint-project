import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Welcome from '../../pages/Welcome';
import { Login } from '../../pages/login';
import { Register } from '../../pages/register';

const AppRoutes: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Welcome />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;
