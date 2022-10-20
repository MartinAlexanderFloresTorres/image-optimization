import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import HomePage from './pages/HomePage';
import ImagesProvider from './providers/ImagesProvider';
import { Toaster } from 'react-hot-toast';
import DescargarPage from './pages/DescargarPage';

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
					</Routes>
				</ImagesProvider>
			</BrowserRouter>
		</>
	);
};

export default App;
