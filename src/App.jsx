import "./App.css";
import { SectionStyled } from "./components/section/Section.styled";
import Form from "./components/form/Form";
import Map from "./components/map/Map";
import Title from "./components/title/Title";
import Footer from "./components/footer/Footer";

function App() {
	return (
		<>
			<SectionStyled>
				<div>
					<Title title="Reach out to us!"></Title>
					<Form></Form>
				</div>
				<Map></Map>
			</SectionStyled>

			<Footer></Footer>
		</>
	);
}

export default App;
