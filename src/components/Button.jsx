import React from 'react';

function Button({ toggleModal }) {
	return (
		<div>
			<button onClick={() => toggleModal()}>Click me</button>
		</div>
	);
}

export default Button;
