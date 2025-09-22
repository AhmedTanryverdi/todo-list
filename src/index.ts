import App from "./view/app";
import LeftPanel from "./view/components/left-panel/left_panel";
import "./index.scss";

document.addEventListener("DOMContentLoaded", function () {
	try {
		const left_panel = new LeftPanel().getComponent();
		new App(left_panel, document.createElement("div")).render();
	} catch (error) {
		console.log(error);
	}
});
