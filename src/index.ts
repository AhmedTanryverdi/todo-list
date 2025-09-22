import App from "./view/app";
import LeftPanel from "./view/components/left-panel/left_panel";
import MainContent from "./view/components/mainContent/main_content";
import "./index.scss";

document.addEventListener("DOMContentLoaded", function () {
	try {
		const leftPanel = new LeftPanel().getComponent();
		const mainContent = new MainContent().getContent();
		new App(leftPanel, mainContent).render();
	} catch (error) {
		console.log(error);
	}
});
