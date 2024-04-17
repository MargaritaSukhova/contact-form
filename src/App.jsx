import "./App.css";
import Footer from "./assets/components/footer/Footer";
import Form from "./assets/components/form/Form";
import { SectionStyled } from "./assets/components/section/Section.styled";
import Title from "./assets/components/title/Title";

function App() {
	return (
		<>
			<SectionStyled>
				<div>
					<Title title="Reach out to us!"></Title>
					<Form></Form>
				</div>
				<div></div>
			</SectionStyled>

			<Footer></Footer>
		</>
	);
}

export default App;
