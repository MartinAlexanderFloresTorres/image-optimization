import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Layout from './layouts/Layout';
import HomePage from './pages/HomePage';
import ImagesProvider from './providers/ImagesProvider';
import DescargarPage from './pages/DescargarPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const App = () => {
	return (
		<>
			<Toaster />
			<BrowserRouter>
				<ImagesProvider>
					<Routes>
						<Route path='/' element={<Layout />}>
							<Route index element={<HomePage />} />
							<Route path='downloads' element={<DescargarPage />} />
						</Route>
						<Route path='/login' element={<LoginPage />} />
						<Route path='/register' element={<RegisterPage />} />
					</Routes>
				</ImagesProvider>
			</BrowserRouter>
		</>
	);
};

export default App;
