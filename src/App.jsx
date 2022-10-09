import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import ImagesProvider from './providers/ImagesProvider';
import { Toaster } from 'react-hot-toast';

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
					</Routes>
				</ImagesProvider>
			</BrowserRouter>
		</>
	);
};

export default App;
