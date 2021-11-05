import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 50px;
	padding-left: 30px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	box-sizing: border-box;
	border-radius: 20px;
	background-color: wheat;
	margin-bottom: 10px;

	.todoTitle {
		font-size: 18px;
		font-weight: 600;
	}
`;
