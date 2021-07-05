import React from 'react';

import styled from 'styled-components';

function SearchBar({ searchText, setSearchText }) {
	return (
		<SearchBarWrapper>
			<SearchBarInput
				value={searchText}
				type="text"
				name="searchBar"
				placeholder="Link titile..."
				onChange={(e) => setSearchText(e.target.value)}
			/>
		</SearchBarWrapper>
	);
}

const SearchBarWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 8px 0 5px;
	height: 53px;
	flex: 4;
	min-width: 10%;
`;
const SearchBarInput = styled.input`
	margin-top: 16px;
	border-radius: 15px;
	border-width: 0;
	font-size: 18px;
	outline: none;
	color: #d3d3d3;
	height: 100%;
	background-color: #65717c;
	padding: 0 8px;
	width: 10%;
	flex: 1;
	::placeholder {
		color: #d3d3d3;
	}
`;

export default SearchBar;
