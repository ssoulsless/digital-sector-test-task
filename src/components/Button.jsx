import React from 'react';

import styled from 'styled-components';

function Button({ handleClick }) {
	return (
		<ButtonWrapper>
			<AddButton onClick={() => handleClick()}>Add new Link</AddButton>
		</ButtonWrapper>
	);
}

const ButtonWrapper = styled.div`
	align-self: flex-end;
	margin-top: 16px;
	margin-right: 16px;
	&:hover {
		transform: translateY(-3px);
		cursor: pointer;
	}
`;
const AddButton = styled.button`
	background-color: #65717c;
	outline: none;
	font-size: 18px;
	border: none;
	color: #d3d3d3;
	padding: 16px 32px;
	border-radius: 15px;
`;

export default Button;
