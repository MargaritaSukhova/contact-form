import "./App.css";
import Footer from "./components/footer/Footer";
import Form from "./components/form/Form";
import { SectionStyled } from "./components/section/Section.styled";
import Title from "./components/title/Title";

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
