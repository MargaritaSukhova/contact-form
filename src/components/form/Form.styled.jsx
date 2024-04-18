import styled from "@emotion/styled";

export const FormStyled = styled.form`
	margin-top: 179px;
	margin-left: 150px;
	display: flex;
	flex-direction: column;
	gap: 8px;

	@media (max-width: 768px) {
		margin-left: 50px;
		align-items: center;
	}

	@media (max-width: 360px) {
		margin-left: 30px;
	}
`;

export const InputStyled = styled.input`
	width: 557px;
	height: 93px;
	padding: 30px 46px;
	border-radius: 10px;
	border: 1px solid #dcdcdc;
	background: #fff;

	@media (max-width: 768px) {
		width: 350px;
		height: 93px;
	}

	@media (max-width: 420px) {
		width: 300px;
		height: 73px;
	}
`;

export const MessageInput = styled.textarea`
	width: 557px;
	height: 189px;
	padding: 30px 46px;
	border-radius: 10px;
	border: 1px solid #dcdcdc;
	background: #fff;
	resize: none;

	@media (max-width: 768px) {
		width: 350px;
	}

	@media (max-width: 420px) {
		width: 300px;
	}
`;

export const ButtonStyled = styled.button`
	margin-top: 15px;
	width: 218px;
	height: 73px;
	border: 0;
	border-radius: 500px;
	background-color: #fad34f;
	color: #fff;
	font-size: 18px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	transition: background-color 300ms ease;
	&:hover {
		background-color: #f472b7;
	}
`;
