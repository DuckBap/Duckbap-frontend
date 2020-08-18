import styled from 'styled-components';

export const OrderHistoryCard = styled.div`
	display: flex;
	width: 100%;
	justify-content: flex-start;
	cursor: pointer;
	border-radius: 10px;
	margin-bottom: 10px;
	box-shadow: inset 0 0 20px rgba(0, 0, 0, 0);
	transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
	&:hover {
		box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3), 0 0 3px rgba(0, 0, 0, 0.1);
	}
	& img {
		width: 300px;
		height: 200px;
		margin-right: 10px;
		padding: 10px;
	}
	& div {
		padding: 10px;
		margin-top: 10px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
`;
