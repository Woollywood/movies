import './assets/common.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Shop from './components/Shop';

function App() {
	console.log(import.meta.env.VITE_API_KEY);

	return (
		<div className='wrapper'>
			<Header />
			<Shop />
			<Footer />
		</div>
	);
}

export default App;
