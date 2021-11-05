import styled from 'styled-components';

export const Container = styled.div`
	width: 75%;
	background-color: white;
	height: 850px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	border-radius: 3px;
	box-shadow: rgb(0, 0, 0, 0.8) -20px 5px 100px;

	h1 {
		/* background-color: brown; */
		width: 100%;
		height: 10%;
		display: flex;
		align-items: center;
		box-sizing: border-box;
		padding-left: 30px;
	}
`;

export const ListsContainer = styled.div`
	/* background-color: chocolate; */
	width: 96%;
	height: 90%;
	margin-bottom: 20px;
	display: flex;
	justify-content: space-between;
`
