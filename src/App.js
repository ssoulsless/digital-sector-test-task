import SideNavigation from './layout/SideNavigation';
import MainContent from './layout/MainContent';
import { useLocalStorage } from './utils/hooks';

import styled from 'styled-components';
import { useEffect, useState } from 'react';

function App() {
	const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

	useEffect(() => {
		if (!localStorage.getItem('links') || !localStorage.getItem('groups')) {
			localStorage.setItem('links', JSON.stringify(defualtLinks));
			localStorage.setItem('groups', JSON.stringify(defaultGroups));
		}
		setLinks(localStorage.getItem('links'));
		setGroups(localStorage.getItem('groups'));
		setGroupId('null');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const [links, setLinks] = useState('');
	const [groups, setGroups] = useState('');
	const [groupId, setGroupId] = useLocalStorage('selectedGroupId');
	return (
		!(!links.trim().length || !groups.trim().length) && (
			<Wrapper className="App">
				{isSideMenuOpen && (
					<SideNavigation
						isSideMenuOpen={isSideMenuOpen}
						setIsSideMenuOpen={() => setIsSideMenuOpen()}
						groupId={groupId}
						setGroupId={(e) => setGroupId(e)}
					/>
				)}

				<MainContent
					isSideMenuOpen={isSideMenuOpen}
					setIsSideMenuOpen={(e) => setIsSideMenuOpen(e)}
					groupId={groupId}
				/>
			</Wrapper>
		)
	);
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
`;

export default App;

const defualtLinks = [
	{
		title: 'Google',
		link: 'http://google.com',
		groupId: 'a1',
		id: '1',
	},
	{
		title: 'Facebook',
		link: 'http://facebook.com',
		groupId: 'a1',
		id: '2',
	},
	{
		title: 'Instagram',
		link: 'http://instagram.com',
		groupId: 'b2',
		id: '3',
	},
	{
		title: 'Twitter',
		link: 'http://twitter.com',
		groupId: 'c3',
		id: '4',
	},
	{
		title: 'Reddit',
		link: 'http://reddit.com',
		groupId: 'c3',
		id: '5',
	},
];

const defaultGroups = [
	{
		title: 'Important',
		id: 'a1',
	},
	{
		title: 'Interesting',
		id: 'b2',
	},
	{
		title: 'Entertainment',
		id: 'c3',
	},
];
