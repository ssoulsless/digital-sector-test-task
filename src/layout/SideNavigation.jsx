import React, { useEffect, useState } from 'react';
import SideNavGroup from '../components/SideNavGroup';
import styled from 'styled-components';

import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';

function SideNavigation({ groupId, setGroupId }) {
	const [groups, setGroups] = useState([]);

	useEffect(() => {
		setGroups(JSON.parse(localStorage.getItem('groups')));
	}, []);

	return (
		<NavWrapper>
			<HeaderWrapper>
				<HeaderTitle>Groups:</HeaderTitle>
				<IconWrapper onClick={() => setGroupId('null')}>
					<Icon
						path={mdiClose}
						title="close"
						size={1}
						color="#e6e9ec"
						horizontal
						vertical
					/>
				</IconWrapper>
			</HeaderWrapper>
			{groups.map((group) => (
				<div key={group.id} onClick={() => setGroupId(group.id)}>
					<SideNavGroup title={group.title} isSelected={groupId === group.id} />
				</div>
			))}
		</NavWrapper>
	);
}

const NavWrapper = styled.div`
	flex: 1;
	background-color: #101b27;
	height: 100vh;
`;
const HeaderWrapper = styled.div`
	margin-top: 16px;
	padding-bottom: 16px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	border-bottom: 0.5px groove #c4ddd3;
`;
const HeaderTitle = styled.h3`
	color: #c4ddd3;
	margin: 16px 8px;
`;
const IconWrapper = styled.div`
	margin-right: 8px;
	&:hover {
		transform: translateY(-3px);
		cursor: pointer;
	}
`;
export default SideNavigation;
