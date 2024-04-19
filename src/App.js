import Topbar from "./Component/Topbar/Topbar";
import MainContent from "./Component/MainContent/MainContent";
import BgVideo from "./Component/BgVideo/BgVideo";
import "./App.css";

function App() {
	return (
		<>
			<BgVideo />
			<div className="app">
				<div className="body">
					<Topbar />
					<MainContent />
				</div>
			</div>
		</>
	);
}

export default App;
