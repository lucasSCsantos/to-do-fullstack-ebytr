import styled from 'styled-components';

export const Container = styled.div`
	background-color: #fff;
	border-radius: 40px;
	display: flex;
	flex-direction: column;
	padding: 20px;
	align-items: center;
	box-sizing: border-box;
	border: 2px solid lightgray;
	box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
	height: 100%;
	width: 30%;
`;

export const Top = styled.div`
	display: flex;
	align-items: center;
	/* background-color: violet; */
	width: 90%;
	justify-content: space-between;
	margin-top: 20px;

	h1 {
		/* background-color: red; */
		height: 40px;
		padding: 0;
	}
	margin-bottom: 15px;
`;
