import Topbar from "./Component/Topbar";
import MainContent from "./Component/MainContent";

function App() {
	return (
		<>
			<video
				autoPlay
				muted
				loop
				playsInline
				id="backgroundVideo"
				className="back-video"
			>
				<source
					src="https://www.uni.cards/videos/nxt_wave_bg.mp4"
					type="video/mp4"
				/>
				Your browser does not support HTML5 video.
			</video>
			<div className="app">
				<div>
					<Topbar />
				</div>
				<div>
					<MainContent />
				</div>
			</div>
		</>
	);
}

export default App;
