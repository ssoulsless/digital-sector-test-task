import SideNavigation from './layout/SideNavigation';
import MainContent from './layout/MainContent';
import { useLocalStorage } from './utils/hooks';

import styled from 'styled-components';

function App() {
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
