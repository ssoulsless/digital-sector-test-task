import React from 'react';

import styled from 'styled-components';

function Button({ handleClick }) {
	return (
		<ButtonWrapper>
			<AddButton onClick={() => handleClick()}>+</AddButton>
		</ButtonWrapper>
	);
}

const ButtonWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	align-self: flex-end;
	margin-top: 16px;
	margin-right: 8px;
	height: 53px;
	min-width: 53px;
	&:hover {
		transform: translateY(-3px);
		cursor: pointer;
	}
`;
const AddButton = styled.button`
	background-color: #65717c;
	border-radius: 15px;
	flex: 1;
	outline: none;
	height: 100%;
	font-size: 18px;
	border: none;
	color: #d3d3d3;
`;

export default Button;
