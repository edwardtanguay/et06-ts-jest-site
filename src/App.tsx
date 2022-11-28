import './App.css';
import { surround } from './tools';

const message = 'this is an info';

const brackets = '{}';

function App() {
	return (
		<div className="App">
			<p>Message: {surround(message, '[]')}</p>
			<p>Message: {surround(message, brackets)}</p>
			<p>Message: {surround(message, '**')}</p>
			<p>Message: {surround(message, 'skdfjskdfj')}</p>
		</div>
	);
}

export default App;
