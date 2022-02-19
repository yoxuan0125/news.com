import "./styles/style.css";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";

function App() {
	return (
		<div>
			<Navbar />
			<Sidebar />
			<Content />
		</div>
	);
}

export default App;
