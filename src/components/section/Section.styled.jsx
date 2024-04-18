import styled from "@emotion/styled";
import cloud from "../../assets/images/cloud.png";
import yellow from "../../assets/icons/yellow.svg";
import sun from "../../assets/icons/sun.svg";

export const SectionStyled = styled.section`
	background-color: #fff;
	background-image: url("${cloud}"), url("${yellow}"), url("${sun}");
	background-repeat: repeat-y, no-repeat, no-repeat;
	background-position: 50% 50%, top 23px left 39px, top 21px left 714px;
	background-size: cover, auto, auto;
	flex: 1 1 auto;
	display: flex;
	gap: 107px;

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;
