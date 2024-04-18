import styled from "@emotion/styled";
import pink from "../../assets/icons/pink.svg"
import turquoise from "../../assets/icons/turquoise.svg"
import yellow from "../../assets/icons/yellow.svg"


export const FooterContainer = styled.footer`
	height: 200px;
	width: 100%;
	background-color: #fafafa;
	background-image: url("${pink}"), url("${turquoise}"), url("${yellow}");
	background-repeat: no-repeat;
	background-size: auto auto;
	background-position: top -39px left 15px, top 0px right 127px,
		top 55px right -38px;
	border: 1px solid #d8d8d8;
	position: relative;
	overflow: hidden;
	display: flex;

	@media (max-width: 768px) {
		background-image: url("${turquoise}"), url("${yellow}");
		background-repeat: no-repeat;
		background-size: auto auto;
		background-position: top 0px right 127px, top 55px right -38px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	@media (max-width: 420px) {
		background-image: url("${yellow}");
		background-repeat: no-repeat;
		background-size: auto;
		background-position: top 55px right -38px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;
