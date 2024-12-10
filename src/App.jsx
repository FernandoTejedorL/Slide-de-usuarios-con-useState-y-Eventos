import { useState } from 'react';
import { USERS } from './constants/users-info';

const App = () => {
	const [counter, setCounter] = useState(0);
	const maximum = USERS.length - 1;
	return (
		<div>
			<img src={USERS[counter].profileImage} alt='' />
			<h1>Name: {USERS[counter].name}</h1>
			<h2>Username: {USERS[counter].username}</h2>
			<h3>Email: {USERS[counter].email}</h3>
			<button
				disabled={counter === 0}
				onClick={() => previous(counter, setCounter)}
			>
				Previous
			</button>
			<button
				disabled={counter === maximum}
				onClick={() => next(counter, setCounter)}
			>
				Next
			</button>
		</div>
	);
};

const next = (counter, setCounter) => {
	setCounter(counter + 1);
};

const previous = (counter, setCounter) => {
	setCounter(counter - 1);
};

export default App;
