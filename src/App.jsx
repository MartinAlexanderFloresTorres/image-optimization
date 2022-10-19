import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import ImagesProvider from './providers/ImagesProvider';
import { Toaster } from 'react-hot-toast';
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
							<Route index element={<Home />} />
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
