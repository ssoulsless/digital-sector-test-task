import SideNavigation from './layout/SideNavigation';
import MainContent from './layout/MainContent';
import { useLocalStorage } from './utils/hooks';

import styled from 'styled-components';
import { useEffect } from 'react';

function App() {
	useEffect(() => {
		!localStorage.getItem('links') &&
			localStorage.setItem('links', JSON.stringify(links));
		!localStorage.getItem('groups') &&
			localStorage.setItem('groups', JSON.stringify(groups));
		return () => {};
	}, []);
	const [groupId, setGroupId] = useLocalStorage('selectedGroupId', null);
	return (
		<Wrapper className="App">
			<SideNavigation groupId={groupId} setGroupId={(e) => setGroupId(e)} />
			<MainContent groupId={groupId} />
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
`;

export default App;

const links = [
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

const groups = [
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
