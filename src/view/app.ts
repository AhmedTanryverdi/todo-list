import "./app.scss";

class App {
	app: HTMLDivElement;
	leftPanel: HTMLElement;
	mainContent: HTMLDivElement;

	constructor(leftPanel: HTMLElement, mainContent: HTMLDivElement) {
		this.app = document.createElement("div");
		if (!this.app) throw new Error("не удалось создать .app!");

		this.app.classList.add("app");
		this.leftPanel = leftPanel;
		this.mainContent = mainContent;
	}

	render(): void {
		const root = document.querySelector("#root");
		if (!root) {
			throw new Error("не удалось найти #root!");
		}

		this.app.append(this.leftPanel);
		this.app.append(this.mainContent);
		root.append(this.app);
	}
}

export default App;
