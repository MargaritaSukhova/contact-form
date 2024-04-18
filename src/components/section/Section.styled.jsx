import styled from "@emotion/styled";

export const SectionStyled = styled.section`
	background-color: #fff;
	background-image: url("src/assets/images/cloud.png"),
		url("src/assets/icons/yellow.svg"), url("src/assets/icons/sun.svg");
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
