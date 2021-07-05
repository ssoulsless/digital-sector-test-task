import React, { useEffect, useState } from 'react';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';

import styled from 'styled-components';

function AddLinkModal({ toggleModal, setLinks }) {
	const [title, setTitle] = useState('');
	const [link, setLink] = useState('');
	const [groupId, setGroupId] = useState('a1');
	const [groups, setGroups] = useState([]);
	const [errorMessage, setErrorMessage] = useState('');

	useEffect(() => {
		setGroups(JSON.parse(localStorage.getItem('groups')));
		return () => {};
	}, []);

	const createNewLink = () => {
		const prevLinks = JSON.parse(localStorage.getItem('links'));
		const newLink = {
			title,
			link,
			groupId,
			id: (Math.random() * 100).toFixed(),
		};
		setLinks(prevLinks.concat(newLink));
		localStorage.setItem('links', JSON.stringify(prevLinks.concat(newLink)));
		toggleModal();
	};

	const handleValid = () => {
		if (!title.trim().length || !link.trim().length) {
			setErrorMessage('Please enter valid information');
			return false;
		} else if (title.trim().length >= 30) {
			setErrorMessage('Title and Link length must be less than 30 characters');
			return false;
		} else {
			setErrorMessage('');
			return true;
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		handleValid() && createNewLink();
	};

	return (
		<Modal>
			<ModalContent>
				<IconWrapper onClick={() => toggleModal()}>
					<Icon
						path={mdiClose}
						title="close"
						size={1}
						color="#e6e9ec"
						horizontal
						vertical
					/>
				</IconWrapper>
				<ModalTitle>Add new Link</ModalTitle>
				{errorMessage.trim().length ? (
					<ErrorMessage>{errorMessage}</ErrorMessage>
				) : null}
				<Form action="">
					<TextInput
						value={title}
						type="text"
						name="title"
						placeholder="Title"
						onChange={(e) => {
							setTitle(e.target.value);
							errorMessage.trim().length && handleValid();
						}}
					/>
					<TextInput
						placeholder="Link"
						value={link}
						type="text"
						name="title"
						onChange={(e) => {
							setLink(e.target.value);
							errorMessage.trim().length && handleValid();
						}}
					/>
					<Select
						value={groupId}
						name="group"
						onChange={(e) => setGroupId(e.target.value)}>
						{groups.map((group) => (
							<option key={group.id} value={group.id}>
								{group.title}
							</option>
						))}
					</Select>
					<Submit type="submit" value="Add" onClick={(e) => handleSubmit(e)} />
				</Form>
			</ModalContent>
		</Modal>
	);
}

const ModalTitle = styled.h4`
	margin: 12px 0 24px;
	font-size: 22px;
`;
const ModalContent = styled.div`
	background-color: #65717c;
	border-radius: 10px;
	padding: 16px;
	display: flex;
	flex-direction: column;
	@media (max-width: 756px) {
		width: 80%;
	}
`;
const Modal = styled.div`
	text-align: center;
	position: fixed;
	left: 0;
	top: 0;
	bottom: 0;
	right: 0;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Form = styled.form`
	display: flex;
	flex-direction: column;
`;
const TextInput = styled.input`
	list-style: none;
	font-size: 18px;
	outline: none;
	margin: 4px;
	background-color: #e6e9ec;
	border: none;
	padding: 8px;
	border-radius: 3px;
`;
const Select = styled.select`
	background-color: #e6e9ec;
	border: none;
	padding: 8px;
	font-size: 18px;
	border-radius: 3px;
	margin: 4px;
	outline: none;
`;
const Submit = styled.input`
	background-color: #e6e9ec;
	border: none;
	padding: 8px;
	font-size: 18px;
	border-radius: 3px;
	margin: 4px;
`;
const IconWrapper = styled.div`
	align-self: flex-end;
`;

const ErrorMessage = styled.p`
	color: #a01b1b;
`;

export default AddLinkModal;
