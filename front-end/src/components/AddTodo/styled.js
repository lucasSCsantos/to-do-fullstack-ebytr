import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 100vh;
	z-index: 10;
	position: absolute;
	top: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.7);
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Modal = styled.div`
	background-color: white;
	border-radius: 5px;
	width: 700px;
	height: 500px;
`;

