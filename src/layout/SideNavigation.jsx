import React, { useEffect, useState } from 'react';
import SideNavGroup from '../components/SideNavGroup';
import styled from 'styled-components';

import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';

function SideNavigation({
	groupId,
	setGroupId,
	isSideMenuOpen,
	setIsSideMenuOpen,
}) {
	const [groups, setGroups] = useState([]);

	useEffect(() => {
		setGroups(JSON.parse(localStorage.getItem('groups')));
	}, []);

	return (
		<NavWrapper>
			<HeaderWrapper>
				<HeaderTitle>Groups:</HeaderTitle>
				<IconWrapper onClick={() => setIsSideMenuOpen(false)}>
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
			<div onClick={() => setGroupId('null')}>
				<SideNavGroup title="All" isSelected={groupId === 'null'} />
			</div>
			{groups.map((group) => (
				<div key={group.id} onClick={() => setGroupId(group.id)}>
					<SideNavGroup title={group.title} isSelected={groupId === group.id} />
				</div>
			))}
		</NavWrapper>
	);
}

const NavWrapper = styled.div`
	background-color: #101b27;
	height: 100vh;
	@media (max-width: 756px) {
		z-index: 2;
		position: fixed;
		width: 80%;
	}
	flex: 1;
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
	display: flex;
	justify-content: center;
	align-items: center;
`;
export default SideNavigation;
