import "./maincontent.scss";

class MainContent {
	mainContent: HTMLDivElement;

	constructor() {
		this.mainContent = document.createElement("div");
		if (!this.mainContent) throw new Error(".main-content не создался!");

		this.mainContent.classList.add("main-content");
		this.header();
		this.main();
		this.footer();
	}

	getContent() {
		return this.mainContent;
	}

	header() {
		const headerString = `
            <header class="main-content">
                <h1 class="main-content__header">todos</h1>
                <label class="main-content__label">
                    <input type="text" class="new-todo" placeholder="What needs to be done?"/>
                </label>
            </header>
        `;

		const header = document
			.createRange()
			.createContextualFragment(headerString);

		this.mainContent.append(header);
	}

	main() {
		const main = document.createElement("main");

		if (!main) {
			this.mainContent.append(
				"блок со списком задач не создан! Попробуйте перезагрузить страницу."
			);
			return;
		}

		this.mainContent.append(main);
	}

	footer() {
		const footerString = `
            <footer class="main-content__footer">
                <p class="main-content__footer_item">Double-click to edit a todo</p>
                <p class="main-content__footer_item">Created by the TodoMVC Team</p>
                <p class="main-content__footer_item">Part of TodoMVC</p>
            </footer>
        `;

		const footer = document
			.createRange()
			.createContextualFragment(footerString);
		this.mainContent.append(footer);
	}
}

export default MainContent;
