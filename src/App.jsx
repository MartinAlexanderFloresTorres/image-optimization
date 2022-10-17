import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import ImagesProvider from './providers/ImagesProvider';
import { Toaster } from 'react-hot-toast';
import { Login } from './components/login/Login';

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

				<div>
					<Routes>
						<Route path='/login' element={<Login/>}>
							
						</Route>
					</Routes>
				</div>
			</BrowserRouter>
		</>
	);
};

export default App;
