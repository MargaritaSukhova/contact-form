import styled from "@emotion/styled";
import Pink from "../../assets/icons/pink.svg?react"
import YellowBig from "../../assets/icons/yellow-big.svg?react";

export const MapWrapper = styled.div`
	width: 624px;
	height: 930px;
	position: relative;
`;

export const ImgWrapper = styled.div`
	width: 624px;
	height: 930px;
	position: relative;
  overflow: hidden;
`;

export const Img = styled.div`
	width: 976px;
	height: 976px;
	border-radius: 100%;
	background-image: url("src/assets/images/map.jpg");
  background-repeat: no-repeat;
  background-size: contain;
	position: absolute;
	top: -52px;
	left: 0px;
`;

export const PinkStyled = styled(Pink)`
position: absolute;
left: -39px;
bottom: 82px;
`

export const YellowBigStyled = styled(YellowBig)`
	position: absolute;
	left: -51px;
	bottom: 285px;
`;