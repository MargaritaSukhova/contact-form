import {
	SocialContainer,
	FacebookStyled,
	Link,
	LinkedinStyled,
	PinterestStyled,
	TwitterStyled,
} from "./SocialMedia.styled";

export default function SocialMedia() {
	return (
		<SocialContainer>
			<Link
				href="https://www.linkedin.com/"
				target="_blank"
				rel="noreferrer noopener"
			>
				<LinkedinStyled />
			</Link>
			<Link
				href="https://twitter.com/"
				target="_blank"
				rel="noreferrer noopener"
			>
				<TwitterStyled />
			</Link>
			<Link
				href="https://www.facebook.com/"
				target="_blank"
				rel="noreferrer noopener"
			>
				<FacebookStyled />
			</Link>
			<Link
				href="https://www.pinterest.com/"
				target="_blank"
				rel="noreferrer noopener"
			>
				<PinterestStyled />
			</Link>
		</SocialContainer>
	);
}
