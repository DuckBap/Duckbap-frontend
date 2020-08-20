import styled from 'styled-components';

export const OrderHistoryContainer = styled.section`
	max-width: 1200px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	margin: 15px 0px;
	padding: 60px;
	padding-top: 40px;

	border-radius: 20px;
	//box-shadow: inset 0 0 20px rgba(0, 0, 0, 0);

	border:2px solid #e7e7e7;
	//border-bottom: 3px solid #DEDEDE;
	box-shadow: 3px 3px 10px -10px rgba(0, 0, 0, 0.4);

	//box-shadow: 3px 5px 10px -6px rgba(0, 0, 0, 0.2);
`;

export const OrderHistoryTitle = styled.h3`
	//font-size: large;
	//font-weight: bold;
	margin-bottom: 30px;

	font-size: 20px;
	font-weight: 800;
	line-height: 28px;
	max-width: inherit;
	color: #ffb61a;
	padding: 5px;
	border-bottom:3px solid #ffb61a;

`;
