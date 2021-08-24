// import logo from './assets/img/logo.svg';
import './assets/css/App.css';

import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

// COMPONENTS AND PAGES IMPORTS

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Services from './pages/Services';

const App = () => {
	return(
		<>
			<Router>

				<Navbar />

				<main className="main">

					<Switch>

						<Route path='/' exact component={Home} />

						<Route path="/about" component={About}/>

						<Route path="/skills" component={Skills}/>

						<Route path="/services" component={Services}/>


					</Switch>

				</main>	

			</Router>		
		</>
	)
}



export default App;
