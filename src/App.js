import Topbar from "./Component/Topbar/Topbar";
import MainContent from "./Component/MainContent/MainContent";
import BgVideo from "./Component/BgVideo/BgVideo";
import "./App.css";

function App() {
	return (
		<>
			
			<div className="app">
			<BgVideo />
				<div className="body">
					<Topbar />
					<MainContent />
				</div>
			</div>
		</>
	);
}

export default App;
