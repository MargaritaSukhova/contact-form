import styled from "@emotion/styled";
import Linkedin from "../../icons/linkedIn.svg?react";
import Twitter from "../../icons/twitter.svg?react";
import Facebook from "../../icons/facebook.svg?react";
import Pinterest from "../../icons/pinterest.svg?react";

export const SocialContainer = styled.div`
	margin-top: 79px;
	margin-left: 343px;
	width: 127px;
	height: 17px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Link = styled.a`
	display: block;
	width: 17px;
	height: 17px;

	&:hover {
		& > svg {
			fill: #f472b7;
		}
	}
`;

export const LinkedinStyled = styled(Linkedin)`
	fill: #696969;
`;

export const TwitterStyled = styled(Twitter)`
	fill: #696969;
`;

export const FacebookStyled = styled(Facebook)`
	fill: #696969;
`;

export const PinterestStyled = styled(Pinterest)`
	fill: #696969;
`;
