import React from 'react';

import styled from 'styled-components';

function LinkCard({ title, link }) {
	return (
		<CardWrapper>
			<CardTitle>{title}</CardTitle>
			<CardLink href={link}>{link}</CardLink>
		</CardWrapper>
	);
}

const CardWrapper = styled.div`
	border-radius: 15px;
	border: 1px solid #c4ddd3;
	text-align: center;
	display: flex;
	flex-direction: column;
	&:hover {
		background-color: #0c1b33;
		cursor: pointer;
		transform: translateY(-3px);
	}
`;
const CardTitle = styled.h4`
	color: #c4ddd3;
	margin: 8px 0;
`;
const CardLink = styled.a`
	color: #88afa0;
	margin-bottom: 8px;
`;

export default LinkCard;
