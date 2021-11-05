import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 50px;
	padding: 0 30px;
	display: flex;
	/* flex-direction: column; */
	align-items: center;
	justify-content: space-between;
	box-sizing: border-box;
	border-radius: 20px;
	background-color: gainsboro;
	margin-bottom: 10px;

	div {
		width: 15%;
		justify-content: space-between;
		/* background-color: blanchedalmond; */
		display: flex;
	}

	.todoTitle {
		font-size: 18px;
		font-weight: 600;
	}
`;
