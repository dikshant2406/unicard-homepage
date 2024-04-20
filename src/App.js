import Topbar from "./Component/Topbar/Topbar";
import MainContent from "./Component/MainContent/MainContent";
import BgVideo from "./Component/BgVideo/BgVideo";
import "./App.css";
import SecondaryContent from "./Component/SecondaryContent/SecondaryContent";
import HighlightContent from "./Component/HighlightContent/HighlightContent.jsx";
import MissionTile from "./Component/MissionTile/MissionTile.jsx";

function App() {
	return (
		<>
			<div className="app">
			<BgVideo />
				<div className="body">
					
					<Topbar />
					<MainContent />
				</div>

				<div className="SecondaryBody">
					<SecondaryContent />
				</div>

				<div className="HighlightBody">
					<HighlightContent />
				</div>

				<div className="MissonTileBody">
					<MissionTile/>
				</div>
			</div>
		</>
	);
}

export default App;
