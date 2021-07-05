import React from 'react';

import styled from 'styled-components';

function SideNavGroup({ title, isSelected }) {
	return (
		<GroupWrapper>
			<GroupTitle isSelected={isSelected}>{title}</GroupTitle>
		</GroupWrapper>
	);
}

const GroupTitle = styled.h4`
	color: ${(props) => (props.isSelected ? '#1cbd7d' : '#c4ddd3')};
	text-align: center;
	margin: 0;
	padding: 0 8px;
	flex-wrap: wrap;
`;
const GroupWrapper = styled.div`
	border: 0.5px groove #c4ddd3;
	border-top: 0;
	cursor: pointer;
	padding: 10px 0;
	&:hover {
		padding: 7px 0 13px;
		background-color: #142231;
	}
`;

export default SideNavGroup;
