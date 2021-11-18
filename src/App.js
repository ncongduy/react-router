import { Routes, Route, Link } from 'react-router-dom';
import { Home, News, Contact } from './pages';
import './App.css';

function App() {
	return (
		<div className='App'>
			<nav>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/news'>News</Link>
				</li>
				<li>
					<Link to='/contact'>Contact</Link>
				</li>
			</nav>

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/news' element={<News />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
		</div>
	);
}

export default App;
