import { useState } from 'react';
import AddLinkModal from './components/AddLinkModal';
import Button from './components/Button';
import LinkCard from './components/LinkCard';
import SideNavigation from './components/SideNavigation';

function App() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const toggleModal = () => {
		setIsModalOpen(!isModalOpen);
	};

	return (
		<div className="App">
			<SideNavigation />
			<div>
				<LinkCard></LinkCard>
			</div>
			<Button toggleModal={() => toggleModal()} />
			{isModalOpen && <AddLinkModal />}
		</div>
	);
}

export default App;
