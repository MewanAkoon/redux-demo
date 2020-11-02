import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './actions';

const App = () => {
	const counter = useSelector(state => state.counter);
	const dispatch = useDispatch();

	return (
		<div className='container mt-4 text-center'>
			<span className='badge badge-dark badge-pill'>{counter}</span>
			<div className='btn-group btn-group-sm d-inline-flex ml-4'>
				<button
					onClick={() => dispatch(increment())}
					className='btn btn-sm btn-primary'>
					+
				</button>
				<button
					onClick={() => dispatch(decrement())}
					className='btn btn-sm btn-danger mx-1'
					disabled={counter === 0}>
					-
				</button>
				<button
					onClick={() => dispatch(reset())}
					className='btn btn-sm btn-warning'>
					Reset
				</button>
			</div>
		</div>
	);
};

export default App;
