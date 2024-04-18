import "./App.css";
import Section from "./components/section/Section";
import Form from "./components/form/Form";
import Map from "./components/map/Map";
import Footer from "./components/footer/Footer";
import { Toaster } from "react-hot-toast";

function App() {
	return (
		<>
			<Section>
				<Form />
				<Map />
			</Section>
			<Footer></Footer>
			<Toaster />
		</>
	);
}

export default App;
