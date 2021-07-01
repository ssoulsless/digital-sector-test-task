import React, { useEffect, useState } from 'react';
import AddLinkModal from '../components/AddLinkModal';
import Button from '../components/Button';
import LinkCard from '../components/LinkCard';

import styled from 'styled-components';
import SearchBar from '../components/SearchBar';

const MainContent = ({ groupId }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [links, setLinks] = useState([]);
	const [searchText, setSearchText] = useState('');

	useEffect(() => {
		setLinks(JSON.parse(localStorage.getItem('links')));
		return () => {};
	}, []);

	const toggleModal = () => {
		setIsModalOpen(!isModalOpen);
	};

	return (
		<ContentWrapper>
			<HeaderWrapper>
				<SearchBar
					searchText={searchText}
					setSearchText={(e) => setSearchText(e)}
				/>
				<Button handleClick={() => toggleModal()} />
			</HeaderWrapper>
			{isModalOpen && (
				<AddLinkModal setLinks={setLinks} toggleModal={toggleModal} />
			)}
			<CardListWrapper>
				{groupId === 'null'
					? searchText === ''
						? links.map((link) => (
								<LinkCard title={link.title} link={link.link} key={link.id} />
						  ))
						: links
								.filter((link) =>
									link.title.toLowerCase().includes(searchText.toLowerCase())
								)
								.map((link) => (
									<LinkCard title={link.title} link={link.link} key={link.id} />
								))
					: searchText === ''
					? links
							.filter((link) => link.groupId === groupId)
							.map((link) => (
								<LinkCard title={link.title} link={link.link} key={link.id} />
							))
					: links
							.filter((link) => link.groupId === groupId)
							.filter((link) =>
								link.title.toLowerCase().includes(searchText.toLowerCase())
							)
							.map((link) => (
								<LinkCard title={link.title} link={link.link} key={link.id} />
							))}
			</CardListWrapper>
		</ContentWrapper>
	);
};

const CardListWrapper = styled.div`
	margin: 16px 16px;
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	grid-gap: 1rem;
	@media (min-width: 756px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media (min-width: 900px) {
		grid-template-columns: repeat(3, 1fr);
	}
	@media (min-width: 1200px) {
		grid-template-columns: repeat(4, 1fr);
	}
`;
const ContentWrapper = styled.div`
	flex: 4;
	background-color: #060e1b;
	display: flex;
	flex-direction: column;
`;
const HeaderWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;

export default MainContent;
