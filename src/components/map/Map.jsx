import {
	MapWrapper, ImgWrapper,
	Img,
	PinkStyled,
	YellowBigStyled,
} from "./Map.styled";

export default function Map() {
  return (
		<MapWrapper>
			<ImgWrapper>
				<Img />
			</ImgWrapper>
			<PinkStyled />
			<YellowBigStyled />
		</MapWrapper>
	);
}
