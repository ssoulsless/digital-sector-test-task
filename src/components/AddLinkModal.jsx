import React, { useEffect, useState } from 'react';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';

import styled from 'styled-components';

function AddLinkModal({ toggleModal }) {
	const [title, setTitle] = useState('');
	const [link, setLink] = useState('');
	const [groupId, setGroupId] = useState('');
	const [groups, setGroups] = useState([]);

	useEffect(() => {
		setGroups(JSON.parse(localStorage.getItem('groups')));
		return () => {};
	}, []);

	const createNewLink = () => {
		localStorage.setItem(
			'links',
			JSON.stringify(
				JSON.parse(localStorage.getItem('links')).concat({
					title,
					link,
					groupId,
					id: (Math.random() * 100).toFixed(),
				})
			)
		);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		createNewLink();
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
				<Form action="">
					<TextInput
						value={title}
						type="text"
						name="title"
						id="title"
						placeholder="Title"
						onChange={(e) => setTitle(e.target.value)}
					/>
					<TextInput
						placeholder="Link"
						value={link}
						type="text"
						name="title"
						id="title"
						onChange={(e) => setLink(e.target.value)}
					/>
					<Select
						value={groupId}
						name="group"
						id="group"
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
`;
const ModalContent = styled.div`
	background-color: #65717c;
	border-radius: 10px;
	padding: 16px;
	display: flex;
	flex-direction: column;
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
	outline: none;
	margin: 4px;
	background-color: #e6e9ec;
	border: none;
	padding: 4px;
	border-radius: 3px;
`;
const Select = styled.select`
	background-color: #e6e9ec;
	border: none;
	padding: 4px;
	border-radius: 3px;
	margin: 4px;
	outline: none;
`;
const Submit = styled.input`
	background-color: #e6e9ec;
	border: none;
	padding: 4px;
	border-radius: 3px;
	margin: 4px;
`;
const IconWrapper = styled.div`
	align-self: flex-end;
`;

export default AddLinkModal;
