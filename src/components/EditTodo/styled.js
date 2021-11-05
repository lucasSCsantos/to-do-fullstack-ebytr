import styled from 'styled-components';

export const Container = styled.div`
	width: 100% !important;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.7);
	z-index: 10;
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center !important;
`;

export const Modal = styled.div`
	background-color: white;
	border-radius: 5px;
	width: 700px !important;
	height: 500px;
	display: flex;
	align-items: center;
	justify-content: center !important;

	form {
		display: flex !important;
		/* background-color: red; */
		flex-direction: column !important;
		align-items: center;
		justify-content: space-around;
		height: 400px;

		input, textarea {
			width: 400px;
		}
	}
`;

